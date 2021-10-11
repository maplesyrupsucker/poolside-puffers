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

  if(totalSupply > 0) {
    let all_metadata=[];
    for (let i=0; i<=totalSupply; i++){

      let tokenName = `#${i}`;

      const trait = traits[i];

      let attributes= [
        {
          "trait_type": "Background",
          "trait_type_index":"Background",
          "value": trait["Background"],
          "rarity":{}
        },
        {
          "trait_type": "Body",
          "trait_type_index":"Body",
          "value": trait["Body"],
          "rarity": {}
        },
        {
          "trait_type": "Tail",
          "trait_type_index":"Tail",
          "value": trait["Tail"],
          "rarity":{}
        },
        {
          "trait_type": "Tail Fins",
          "trait_type_index":"Assfins",
          "value": trait["Assfins"],
          "rarity":{}
        },
        {
          "trait_type": "Spikes",
          "trait_type_index":"Spikes",
          "value": trait["Spikes"],
          "rarity":{}
        },
        {
          "trait_type": "Face",
          "trait_type_index":"Eyes",
          "value": trait["Eyes"],
          "rarity":{}
        },
        {
          "trait_type": "Fins",
          "trait_type_index":"Fins",
          "value": trait["Fins"],
          "rarity":{}
        },
        {
          "trait_type": "Accessories",
          "trait_type_index":"Accessories",
          "value": trait["Accessories"],
          "rarity":{}
        }

      ]

      let metadata = {
        "name": tokenName,
        "description": "Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!",
        "tokenId" : i,
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "imageIPFS": trait["imageIPFS"],
        "local_image": `/images/all/`+i+`.png`,
        "external_url":"https://puffers.cash",
        "numberOfDiamonds":numberOfDiamonds(attributes),
        "attributes":attributes
      }

      all_metadata.push(metadata)
    }



    res.statusCode = 200
    res.json(all_metadata)
  } else {
    res.statuscode = 400
    res.json({error: "No puffer was found"})
  }

}