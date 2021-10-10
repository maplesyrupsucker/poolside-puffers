// import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
// import Web3 from "web3";

import traits from "../../database/traitsfinal.json";

// const infuraAddress = INFURA_ADDRESS
export default async(req, res) => {

  // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  // const provider = new Web3.providers.HttpProvider(infuraAddress)
  // const web3infura = new Web3(provider);
  // const pufferContract = new web3infura.eth.Contract(ABI, ADDRESS);

  // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
  // const totalSupply = await pufferContract.methods.totalSupply().call();

  const totalSupply = 2099; // manually set the total supply so we don't need web3 0-2099 = 2100



  if(totalSupply > 0) {
    let all_metadata=[];
    for (var i=0; i<=totalSupply; i++){
     
      let tokenName = `#${i}`;

      const trait = traits[i];

      let metadata;
      
        metadata = {
          "name": tokenName,
          "description": "Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!",
          "tokenId" : i,
          "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
          "local_image": `/images/all/`+i+`.png`,
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

      all_metadata.push(metadata)
    }

    console.log(all_metadata);

    res.statusCode = 200
    res.json(all_metadata)
  } else {
    res.statuscode = 400
    res.json({error: "No puffer was found"})
  }

}