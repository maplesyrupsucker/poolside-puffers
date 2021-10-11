import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";

// import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example
import traits from "../../database/traitsfinal.json";

const infuraAddress = INFURA_ADDRESS

const pufferApi = async(req, res) => {

function numberOfPureBloods(attributes) {
  let pureBloodCount = 0;

  //setup purebloods
  const purebloodRed =
    attributes.filter((i) => i.value === "Red").length >= 5;
  const purebloodYellow =
    attributes.filter((i) => i.value === "Yellow").length >= 5;
  const purebloodOrange =
    attributes.filter((i) => i.value === "Orange").length >= 5;
  const purebloodGreen =
    attributes.filter((i) => i.value === "Green").length >= 5;
  const purebloodBlue =
    attributes.filter((i) => i.value === "Blue").length >= 5;
  const purebloodIndigo =
    attributes.filter((i) => i.value === "Indigo").length >= 5;
  const purebloodViolet =
    attributes.filter((i) => i.value === "Violet").length >= 5;

  // if purebloods
  if (
    purebloodBlue ||
    purebloodGreen ||
    purebloodIndigo ||
    purebloodOrange ||
    purebloodRed ||
    purebloodViolet ||
    purebloodYellow
  ) {
    pureBloodCount += 1;
  }
  // console.log("purebloodCount", pureBloodCount);

  return pureBloodCount;


}

function numberOfHalfBloods(attributes) {
  let halfBloodCount = 0;


  // BODY PARTS THAT IMPACT BLOOD
  // body
  // spikes
  // fins
  // tail
  // tail fins 

  //setup half breeds
  const fourRed =
    attributes.filter((i) => i.value === "Red").length == 4;
  const fourOrange = 
    attributes.filter((i) => i.value === "Orange").length == 4;
  const fourYellow =
    attributes.filter((i) => i.value === "Yellow").length == 4;
  const fourGreen =
    attributes.filter((i) => i.value === "Green").length == 4;
  const fourBlue =
    attributes.filter((i) => i.value === "Blue").length == 4;
    console.log('fourblue', fourBlue);
  const fourIndigo =
    attributes.filter((i) => i.value === "Indigo").length == 4;
  const fourViolet =
    attributes.filter((i) => i.value === "Violet").length == 4;


  // need to find a way to remove background trait from length without editing traits database
  const threeRed =
    attributes.filter((i) => i.value === "Red").length == 3;
  const threeOrange = 
    attributes.filter((i) => i.value === "Orange").length == 3;
  const threeYellow =
    attributes.filter((i) => i.value === "Yellow").length == 3;
  const threeGreen =
    attributes.filter((i) => i.value === "Green").length == 3;
  const threeBlue =
    attributes.filter((i) => i.value === "Blue").length == 3;
  const threeIndigo =
    attributes.filter((i) => i.value === "Indigo").length == 3;
  const threeViolet =
    attributes.filter((i) => i.value === "Violet").length == 3;
  
  const twoRed =
    attributes.filter((i) => i.value === "Red").length == 2;
  const twoOrange = 
    attributes.filter((i) => i.value === "Orange").length == 2;
  const twoYellow =
    attributes.filter((i) => i.value === "Yellow").length == 2;
  const twoGreen =
    attributes.filter((i) => i.value === "Green").length == 2;
  const twoBlue =
    attributes.filter((i) => i.value === "Blue").length == 2;
  const twoIndigo =
    attributes.filter((i) => i.value === "Indigo").length == 2;
  const twoViolet =
    attributes.filter((i) => i.value === "Violet").length == 2;


  if (

      fourRed ||
      fourOrange || 
      fourYellow ||
      fourGreen ||
      fourBlue ||
      fourIndigo ||
      fourViolet ||

      (threeRed && twoOrange) ||
      (threeRed && twoYellow) ||
      (threeRed && twoGreen) ||
      (threeRed && twoBlue) ||
      (threeRed && twoIndigo) ||
      (threeRed && twoViolet) ||

      (threeOrange && twoRed) ||
      (threeOrange && twoYellow) ||
      (threeOrange && twoGreen) ||
      (threeOrange && twoBlue) ||
      (threeOrange && twoIndigo) ||
      (threeOrange && twoViolet) || 

      (threeYellow && twoOrange) ||
      (threeYellow && twoRed) ||
      (threeYellow && twoGreen) ||
      (threeYellow && twoBlue) ||
      (threeYellow && twoIndigo) ||
      (threeYellow && twoViolet) ||

      (threeGreen && twoOrange) ||
      (threeGreen && twoRed) ||
      (threeGreen && twoYellow) ||  
      (threeGreen && twoBlue) ||
      (threeGreen && twoIndigo) ||
      (threeGreen && twoViolet) ||

      (threeBlue && twoOrange) ||
      (threeBlue && twoRed) ||
      (threeBlue && twoYellow) ||
      (threeBlue && twoGreen) ||
      (threeBlue && twoIndigo) ||
      (threeBlue && twoViolet) ||

      (threeIndigo && twoOrange) ||
      (threeIndigo && twoRed) ||
      (threeIndigo && twoYellow) ||
      (threeIndigo && twoGreen) ||
      (threeIndigo && twoBlue) ||
      (threeIndigo && twoViolet) ||

      (threeViolet && twoOrange) ||
      (threeViolet && twoRed) ||
      (threeViolet && twoYellow) ||
      (threeViolet && twoGreen) ||
      (threeViolet && twoBlue) ||
      (threeViolet && twoIndigo) 


    ) {
      halfBloodCount += 1;
    }

    // console.log("halfBloodCount", halfBloodCount);
    return halfBloodCount;

}

function numberOfDiamonds(attributes) {
    let diamondCount = 0;

    const purebloodRed =
        attributes.filter((i) => i.value === "Red").length >= 5;
    const purebloodYellow =
        attributes.filter((i) => i.value === "Yellow").length >= 5;
    const purebloodOrange =
        attributes.filter((i) => i.value === "Orange").length >= 5;
    const purebloodGreen =
        attributes.filter((i) => i.value === "Green").length >= 5;
    const purebloodBlue =
        attributes.filter((i) => i.value === "Blue").length >= 5;
    const purebloodIndigo =
        attributes.filter((i) => i.value === "Indigo").length >= 5;
    const purebloodViolet =
        attributes.filter((i) => i.value === "Violet").length >= 5;

    if (
        purebloodBlue ||
        purebloodGreen ||
        purebloodIndigo ||
        purebloodOrange ||
        purebloodRed ||
        purebloodViolet ||
        purebloodYellow
    ) {
        diamondCount += 2;
    }

    attributes.forEach((attribute) => {
        if (attribute.value.indexOf("Animated") >= 0) diamondCount += 2;
        if (attribute.value.indexOf("Ripped") >= 0) diamondCount += 1;
        if (attribute.value.indexOf("Cigarette") >= 0) diamondCount += 1;
        if (attribute.value.indexOf("Joint") >= 0) diamondCount += 1;
        if (attribute.value.indexOf("Summer") >= 0) diamondCount += 1;
        if (attribute.value.indexOf("Pool") >= 0) diamondCount += 1;
        if (attribute.value.indexOf("Animated Pool") >= 0) diamondCount += 1;
    });

    return diamondCount; // return a number
}


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
    const trait = traits[parseInt(query)]
    // const trait = traits[ Math.floor(Math.random() * 2100) ] // for testing on rinkeby 

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    if ( signatures.includes( parseInt( query ) ) ) {
    
      metadata = {
        "name": tokenName,
        "description": "Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://puffers.cash",
        "attributes": [   
          {
            "trait_type": "Signature Series",
            "value": trait["Signature Series"]
          }    
        ]
      }
      // console.log(metadata)
    } else {
    // GENERAL PUFFER METADATA

        let attributes = [
            {
                "trait_type": "Background",
                "value": trait["Background"] + " Water",
                "trait_type_index":"Background",
                "rarity":{}
            },
            {
                "trait_type": "Body",
                "value": trait["Body"],
                "trait_type_index":"Body",
                "rarity":{}
            },
            {
                "trait_type": "Tail",
                "value": trait["Tail"],
                "trait_type_index":"Tail",
                "rarity":{}
            },
            {
                "trait_type": "Tail Fins",
                "value": trait["Assfins"],
                "trait_type_index":"Assfins",
                "rarity":{}
            },
            {
                "trait_type": "Spikes",
                "value": trait["Spikes"],
                "trait_type_index":"Spikes",
                "rarity":{}
            },
            {
                "trait_type": "Face",
                "value": trait["Eyes"],
                "trait_type_index":"Eyes",
                "rarity":{}
            },
            {
                "trait_type": "Fins",
                "value": trait["Fins"],
                "trait_type_index":"Fins",
                "rarity":{}
            },
            {
                "trait_type": "Accessories",
                "value": trait["Accessories"],
                "trait_type_index":"Accessories",
                "rarity":{}
            }

        ];

      metadata = {
        "name": tokenName,
        "description": "Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://puffers.cash",
        "numberOfDiamonds":numberOfDiamonds(attributes),
        "numberOfPureBloods":numberOfPureBloods(attributes),
        "numberOfHalfBloods":numberOfHalfBloods(attributes),
        "attributes": attributes
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

export default pufferApi