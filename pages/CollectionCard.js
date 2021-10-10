
import { useState, useEffect } from "react";

export default function CollectionCard({ pufferContract, walletAddress }) {
  const [collectionCardData, setCollectionCardData] = useState([]);
  // const [pufferContract, setPufferContract] = useState(null)

  

  useEffect(async () => {
    const bal = await pufferContract?.methods?.balanceOf(walletAddress)?.call();
    const make_range = (s, e) =>
      Array(e - s + 1)
        .fill()
        .map((_, i) => s + i);
    const c = 0;
    const CHUNK_SIZE = 2100; // in case we have tooo many

    if (bal) {
      const r = make_range(0, Math.min(bal - 1, c + CHUNK_SIZE));

      const ids = await Promise.all(
          r?.map((i) =>
              pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call()
          )
      );

      console.log(ids);

      const objs = await Promise.all(
          ids.map((id) =>
              pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call()
          )
      );
      console.log(objs);
    }

      const attrs = await fetch(`/api/all`).then((res) => res.json());
      setCollectionCardData(attrs.sort((a, b) => a.tokenId - b.tokenId));
      // console.log(attrs);
        // setCollectionCardData(attrs);
  }, []);

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
    // console.log("diamondcount", diamondCount);

    return diamondCount; // return a number
  }

  if (collectionCardData.length == 0) {
    return (
      <div id="puffer-pool" className="flex flex-wrap justify-center">
        <div className="puffer flex flex-col">
          <img src="images/loading.gif" alt="loading" className="loading"></img>
          <h2 className="Poppitandfinchsans text-center text-2xl text-black">
            Searching Blockchain...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div id="puffer-pool" className="flex flex-wrap justify-center">
      {collectionCardData.map((obj) => {
        const { attributes } = obj;
        const diamondCount = numberOfDiamonds(attributes);
        const diamondArray = new Array(diamondCount).fill("");

        return (
          <div className="puffer flex flex-col" key={obj.tokenId}>
            <div className="rare">
              <span>
                {diamondArray.map((attributes) => {
                  return (
                    <img
                      src="images/diamond.png"
                      alt="rare"
                      className="diamond"
                    ></img>
                  );
                })}
              </span>
            </div>

            <a
              href={obj.image}
            >
              <img
                src={obj.local_image}
                // src={images[obj.tokenId]} // probably needs fixing
                alt={obj.name}
                onError={(event) => {
                  event.target.src = "";
                  event.target.src = obj.local_image.replace(/\.[^.]+$/, '.webp');
                }}
              ></img>
            </a>
            <h3 className="Poppitandfinchsans text-center text-4xl text-black">
              {obj.name}
            </h3>
            <p className="Poppitandfinchsans text-center text-black">Traits:</p>
            <ul className="pufferAttributes ">
              {attributes.map((attributes) => {
                return (
                  <li key={attributes.trait_type}>
                    <span>{attributes.trait_type}:</span> {attributes.value}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
