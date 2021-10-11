import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import traits from "../database/traitsfinal.json";
import useInfiniteScroll from "./useInfiniteScroll";

const customStyles = {
  content: {
    width:'auto',
    height:'auto',
  },
};

export default function PufferCard({ pufferContract, walletAddress,sortBy }) {
  const [allPufferCardData, setAllPufferCardData] = useState([]);
  const [pufferCardData, setPufferCardData] = useState([]);
  const [paginatedPufferCardData, setPaginatedPufferCardData] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(listMorePuffers);
  const [showModal, setShowModal] = useState(false);
  const [rarityTraits, setRarityTraits] = useState([]);
  const [rarityImage, setRarityImage] = useState('');
  const [rarityName, setRarityName] = useState('');
  const [rarityDiamonds, setRarityDiamonds] = useState('');
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
  
  let perPage=21;

  function listMorePuffers() {
    let nextCollectionCardData=[];
    let start = paginatedPufferCardData.length;
    if ( (start+perPage) <= pufferCardData.length ) {
      nextCollectionCardData = pufferCardData.slice(start, start+perPage);
    }else{
      try {
        nextCollectionCardData = pufferCardData.slice(start, start+(pufferCardData.length - paginatedPufferCardData.length));
      }catch (e){}
    }

    setPaginatedPufferCardData(prevState => ([...prevState, ...nextCollectionCardData]));
    setIsFetching(false); // THIS IS WHAT TRIGGERS THE AUTO SCROLL

    // UNCOMMENT THIS SECTION AND CHECK IF IT AUTO HIDES THE LOAD MORE BUTTON ON YOUR BROWSER
    // if (paginatedCollectionCardData.length > 0 && paginatedCollectionCardData.length < collectionCardData.length){
    //   setShowLoadMoreButton(true);
    // }else{
    //   setShowLoadMoreButton(false);
    // }
  }

  async function getRarity(arr,trait_type,trait_type_value) {
    return await findOcc(arr,trait_type,trait_type_value);
  }

  async function findOcc(arr, key, value){
    let occurrence=0;

    arr.forEach((x)=>{
      x.attributes.forEach((a)=>{
        if(key == a.trait_type_index && value == a.value){
          occurrence++
        }
      });
    })

    return occurrence;
  }

  async function comparisonTraits(i) {
    setShowModal(true);

    let arr = allPufferCardData;
    if (allPufferCardData.length == 0) {
      arr = await fetch(`/api/all`).then((res) => res.json());
      setAllPufferCardData(arr);
    }

    if (paginatedPufferCardData[i]) {
      setRarityImage(paginatedPufferCardData[i].image);
      setRarityName(paginatedPufferCardData[i].tokenId);
      setRarityDiamonds(paginatedPufferCardData[i].numberOfDiamonds);

      const attributes = paginatedPufferCardData[i].attributes;
      const comparisonTraits = await Promise.all(
          attributes.map((attribute,index) => getRarity(arr, attribute.trait_type_index, attribute.value).then(r => {
            attribute.rarity = r;
            return (<li key={"comparisonTraits" + index}>
              <h3 className="rarity-header">{attribute.trait_type}: <span>{attribute.value}</span></h3><strong>{attribute.rarity}</strong> cards have this feature
            </li>)
          }))
      );
      setRarityTraits(comparisonTraits);
    }

  }

  function openTraitsModal(i){
    comparisonTraits(i).then();
  }

  async function transfer(obj) {
    console.log(obj);
    if (!obj.tokenId) {
      alert("something went wrong");
    } else {
      // const pufferContract = new window.web3.eth.Contract(ABI, ADDRESS)
      let address = prompt("where would you like to send the NFT to?");

      if (!address) {
        console.log("no address entered");
        // probably worth verifying the addess is valid too...
        return;
      }
      if (address.indexOf("0x") != -1 && address.length == 42) {
        await pufferContract.methods
            .safeTransferFrom(walletAddress, address, obj.tokenId)
            .send({
              from: walletAddress,
            });
      } else {
        alert("invalid address");
      }
    }
  }

  useEffect(async () => {
    let r;
    if (sortBy==''){ // this is to ensure sort by does not call the api(its slow)
      const bal = await pufferContract.methods.balanceOf(walletAddress).call();
      const make_range = (s, e) =>
          Array(e - s + 1)
              .fill()
              .map((_, i) => s + i);
      const c = 0;
      const CHUNK_SIZE = 2100; // in case we have tooo many

      r = make_range(0, Math.min(bal - 1, c + CHUNK_SIZE));
    }

    try {
      let attrs=pufferCardData;
      if (sortBy=='') { // this is to ensure sort by does not call the api(its slow)
        const ids = await Promise.all(
            r.map((i) =>
                pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call()
            )
        );
        // console.log(ids);

        const objs = await Promise.all(
            ids.map((id) =>
                id
            )
        );
        // console.log(objs);

        //switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app
        // const attrs = await Promise.all(objs.map((obj) =>
        //   fetch(obj).then((res) => res.json())
        // ));
        // console.log(attrs);

        attrs = await Promise.all(
            objs.map((id) => fetch(`/api/${id}`).then((res) => res.json()))
        );
      }
      let sortedAttr;
      if ( !sortBy || sortBy==='' || sortBy=="name" ) {
        sortedAttr = attrs.sort((a, b) => a.tokenId - b.tokenId);
      }else{
          sortedAttr = attrs.sort((a, b) => b.numberOfDiamonds - a.numberOfDiamonds);
      }

      setPufferCardData(sortedAttr);
      let sortedAttrSliced=sortedAttr.slice(0, perPage);
      setPaginatedPufferCardData(sortedAttrSliced);


      // UNCOMMENT THIS SECTION AND CHECK IF IT AUTO HIDES THE LOAD MORE BUTTON ON YOUR BROWSER
      if (sortedAttrSliced.length > 0 && sortedAttrSliced.length < sortedAttr.length){
        setShowLoadMoreButton(true);
      }else{
        setShowLoadMoreButton(false);
      }

    } catch (e) {
      console.error(e);
    }
  }, [sortBy]);

  if (pufferCardData.length == 0) {
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
        {paginatedPufferCardData.map((obj,index) => {
          const { attributes } = obj;

          const diamondCount = obj.numberOfDiamonds;
          const diamondArray = new Array(diamondCount).fill("");

          const pureBloodCount = obj.numberOfPureBloods;
          const pureBloodArray = new Array(pureBloodCount).fill("");
  
          const halfBloodCount = obj.numberOfHalfBloods;
          const halfBloodArray = new Array(halfBloodCount).fill("");
          /*  for (let i = 0; i < diamondCount; i++) {
            diamondArray.push("");
          }
   */
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
                    {pureBloodArray.map((attributes) => {
                      return (
                        <img
                            src="images/pureblood.png"
                            alt="pure blood"
                            className="diamond"
                          ></img>
                      );
                    })}
                    {halfBloodArray.map((attributes) => {
                      return (
                        <img
                            src="images/halfblood.png"
                            alt="half blood"
                            className="diamond"
                          ></img>
                      );
                    })}
                  </span>
                </div>
                <img
                    src={obj.image}
                    alt={obj.name}
                    onError={(event) => {
                      event.target.src = "";
                      event.target.src = obj.image;
                    }}
                ></img>
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
                <br/>
                <button className="rarity" onClick={()=>openTraitsModal(index)}>Rarity</button>
                <br/>
                <button className="transfer" onClick={() => transfer(obj)}>
                  <small>Transfer</small>💌
                </button>
              </div>
          );
        })}

        

        <ReactModal
            isOpen={showModal}
            style={customStyles}
            contentLabel="Rarity"
        >
          <h2 className="text-black Poppitandfinchsans text-center text-6xl">Rarity #{rarityName}</h2>
          
          <img
              className="rarityImage"
              src={rarityImage}
              alt={rarityImage}
          ></img>
          <h4 className="text-center">
            <span>{rarityDiamonds}</span> Diamond
              <img
                  src="images/diamond.png"
                  alt="rare"
                  className="diamond"
              ></img>
          </h4>
          <ul className="text-center">
            {rarityTraits}
          </ul>
          
          <button className="closemodal" onClick={ ()=> setShowModal(false)}>Close</button>
        </ReactModal>

        <br/>
        {
          showLoadMoreButton && <div className="loader"><button onClick={() => listMorePuffers()}>Load more..</button></div>
        }
</div>
);
}