

///NOTES: THIS FILE SHOULD CREATE A NEW API when you visit localhost:3000/api/all that displays entire JSON. It's copied from [id].js in same directory. You can view how it works by visiting puffers.cash/api/0 or puffers.cash/api/1. I want it so puffers.cash/api/all loads entire json 
/// You can likely remove the req, res since this file should only parse and format `traits` 
/// `query` needs to be removed since we should just be looping through `traits`



import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";

// import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example
import traits from "../../database/traitsfinal.json";

const infuraAddress = INFURA_ADDRESS

// this may need changing since it likely is looking for request / response ie localhost:3000/api/0 but since we want to show everything maybe no need
const allApi = async(req, res) => {

    // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const pufferContract = new web3infura.eth.Contract(ABI, ADDRESS)
  


  // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
  const totalSupply = await pufferContract.methods.totalSupply().call();
  console.log(totalSupply)
  


// THE ID YOU ASKED IN THE URL
  const query = req.query.id;


  // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW
  if(parseInt(query) < totalSupply) {
  // const totalPuffers = 2100;
  // if(parseInt(query) < totalPuffers) {


    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    const tokenNameCall = await pufferContract.methods.pufferNames(query).call();
    let tokenName = `#${query}${(tokenNameCall === '') ? "" : ` - ${tokenNameCall}`}`

    // IF YOU ARE NOT USING CUSTOM NAMES, JUST USE THIS
    // let tokenName= `#${query}`

    const signatures = [99999,999999]

    // : probably replace query with index ie traits[i]
    const trait = traits[parseInt(query)]
    // const trait = traits[ Math.floor(Math.random() * 2100) ] // for testing on rinkeby 

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}
    
    
    //: LOOP THROUGH ../database/traitsfinal.json and format below

    // GENERAL PUFFER METADATA
      metadata = {
        "name": tokenName,
        "description": "Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!",
        // query should just replace with the index of loop such as traits[i]
        "tokenId" : parseInt(query),
        // trait should work if line 52 uses index
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://puffers.cash",
        "attributes": [          
            {
              "trait_type": "Background",
              "value": trait["Background"]
            },
            {
              "trait_type": "Body",
              "value": trait["Body"]
            },
            {
              "trait_type": "Tail",
              "value": trait["Tail"]
            },
            {
              "trait_type": "Tail Fins",
              "value": trait["Assfins"]
            },
            {
              "trait_type": "Spikes",
              "value": trait["Spikes"]
            },
            {
              "trait_type": "Face",
              "value": trait["Eyes"]
            },
            {
              "trait_type": "Fins",
              "value": trait["Fins"]
            },
            {
              "trait_type": "Accessories",
              "value": trait["Accessories"]
            }
    
        ]
      }
      
      // console.log(metadata)

    }
    
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The puffer you requested is out of range"})

  }


  // this is after the reveal

  
}

export default allApi