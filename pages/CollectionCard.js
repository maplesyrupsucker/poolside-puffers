
import React, { useState, useEffect } from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    width:'auto',
    height:'auto',
  },
};

export default function CollectionCard({ sortBy }) {
  const [collectionCardData, setCollectionCardData] = useState([]);
  const [paginatedCollectionCardData, setPaginatedCollectionCardData] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(listMoreCollections);
  const [showModal, setShowModal] = useState(false);
  const [rarityTraits, setRarityTraits] = useState([]);
  const [rarityImage, setRarityImage] = useState('');
  const [rarityName, setRarityName] = useState('');
  const [rarityDiamonds, setRarityDiamonds] = useState('');
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
  let perPage=10;

  function listMoreCollections() {
    let nextCollectionCardData=[];
    let start = paginatedCollectionCardData.length;
    if ( (start+perPage) <= collectionCardData.length ) {
      nextCollectionCardData = collectionCardData.slice(start, start+perPage);
    }else{
      try {
        nextCollectionCardData = collectionCardData.slice(start, start+(collectionCardData.length - paginatedCollectionCardData.length));
      }catch (e){}
    }

      setPaginatedCollectionCardData(prevState => ([...prevState, ...nextCollectionCardData]));
      setIsFetching(false); // THIS IS WHAT TRIGGERS THE AUTO SCROLL

    // UNCOMMENT THIS SECTION AND CHECK IF IT AUTO HIDES THE LOAD MORE BUTTON ON YOUR BROWSER
    // if (paginatedCollectionCardData.length > 0 && paginatedCollectionCardData.length < collectionCardData.length){
    //   setShowLoadMoreButton(true);
    // }else{
    //   setShowLoadMoreButton(false);
    // }
  }


  async function fetchData (){
    const attrs = await fetch(`/api/all`).then((res) => res.json());
    let sortedAttr;
    if ( !sortBy || sortBy==='' ) {
      sortedAttr = attrs.sort((a, b) => a.tokenId - b.tokenId);
    }else{
      if (sortBy=="name") {
        sortedAttr = attrs.sort((a, b) => a.name - b.name);
      }else{
        sortedAttr = attrs.sort((a, b) => b.numberOfDiamonds - a.numberOfDiamonds);
      }
    }

    setCollectionCardData(sortedAttr);
    let sortedAttrSliced=sortedAttr.slice(0, perPage);
    setPaginatedCollectionCardData(sortedAttrSliced);

    // UNCOMMENT THIS SECTION AND CHECK IF IT AUTO HIDES THE LOAD MORE BUTTON ON YOUR BROWSER
    // if (sortedAttrSliced.length > 0 && sortedAttrSliced.length < sortedAttr.length){
    //   setShowLoadMoreButton(true);
    // }else{
    //   setShowLoadMoreButton(false);
    // }
  }

  useEffect(async () => {
    await fetchData();
  }, [sortBy]);

  function getRarity(i,trait_type,trait_type_value) {
    return findOcc(collectionCardData,trait_type,trait_type_value);
  }

  function findOcc(arr, key, value){
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

  function comparisonTraits(i) {
    setShowModal(true);
    if (paginatedCollectionCardData[i]) {
      setRarityImage(paginatedCollectionCardData[i].image);
      setRarityName(paginatedCollectionCardData[i].tokenId);
      setRarityDiamonds(paginatedCollectionCardData[i].numberOfDiamonds);
      setRarityTraits(paginatedCollectionCardData[i].attributes.map((attribute) => {
          attribute.rarity = getRarity(i, attribute.trait_type_index, attribute.value);
          console.log(attribute.rarity)
          return (<li key={"comparisonTraits" + i}>
            <h3 className="rarity-header">{attribute.trait_type}: <span>{attribute.value}</span></h3><strong>{attribute?.rarity}</strong> cards have this feature
          </li>)}));
    }
  }

  // function loadAlternative(element, list) {
  //   var image = new Image();

  //   image.onload = function() {
  //     element.src = this.src;
  //   }

  //   image.onerror = function() {
  //     if (list.length) {
  //       loadAlternative(element, list);
  //     }
  //   }

  //   //  pick off the first url in the list
  //   image.src = list.shift();
  // }


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
        {paginatedCollectionCardData.map((obj,index) => {
          const { attributes } = obj;
          
          const diamondCount = obj.numberOfDiamonds;
          const diamondArray = new Array(diamondCount).fill("");

          const pureBloodCount = obj.numberOfPureBloods;
          const pureBloodArray = new Array(pureBloodCount).fill("");
  
          const halfBloodCount = obj.numberOfHalfBloods;
          const halfBloodArray = new Array(halfBloodCount).fill("");

          // const fallback = '"https://ipfs.io/ipfs/' + obj.imageIPFS + ","
          // + 'https://gateway.pinata.cloud/ipfs/' + obj.imageIPFS + ','
          // + 'https://ipfs.kxv.io/ipfs/' + obj.imageIPFS + ','
          // + 'https://ipfs.eth.aragon.network/ipfs/' + obj.imageIPFS

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

                {/* <a
              href={obj.image}
            > */}
                <img
                    src={obj.image}
                    // src={images[obj.tokenId]} // probably needs fixing
                    alt={obj.name}
                    //use local files - MIGHT not work because vercel limits
                    // onError={(event) => {
                    //   event.target.src = "";
                    //   event.target.src = obj.local_image.replace(/\.[^.]+$/, '.webp');
                    // }}
                    // data-alternative={fallback}

                    onClick={(event) => {
                      event.target.src = "";
                      event.target.src = "https://ipfs.kxv.io/ipfs/" + obj.imageIPFS;
                    }}

                    onError={(event) => {
                      setTimeout(() => {
                        event.target.src = "";
                        event.target.src = "https://ipfs.io/ipfs/" + obj.imageIPFS;
                      }, 1050);

                      // onError={(event) => {
                      //   setTimeout(() => {
                      //     loadAlternative(event.target.src, event.target.getAttribute('data-alternative').split(/,/));
                      //     // event.target.src = "";
                      //     // event.target.src = "https://ipfs.io/ipfs/" + obj.imageIPFS;

                      // }, 1100);

                    }}
                ></img>
                {/* </a> */}
                <h3 className="Poppitandfinchsans text-center text-4xl text-black">
                  {obj.name}
                </h3>
                <p className="Poppitandfinchsans text-center text-black">Traits:</p>
                <ul className="pufferAttributes ">
                  {attributes.map((attribute) => {
                    //attribute.rarity=getRarity(index,attribute.trait_type_index);
                    return (
                        <li key={attribute.trait_type}>
                          <span>{attribute.trait_type}:</span> {attribute.value}
                        </li>
                    );
                  })}
                </ul>
                <br/>

                <button className="rarity" onClick={()=>comparisonTraits(index)}>Rarity</button>
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
          showLoadMoreButton && <div className="loader"><button onClick={() => listMoreCollections()}>Load more..</button></div>
        }
      </div>
  );
}
