
import React, { useState, useEffect } from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import traits from "../database/traitsfinal.json";
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
  let perPage=16;

  function listMoreCollections() {
    let nextCollectionCardData=[];
    let start = paginatedCollectionCardData.length;
    if ( (start+perPage) <= collectionCardData.length ) {
      nextCollectionCardData = collectionCardData.slice(start, start+perPage);
    }else{
      try {
        nextCollectionCardData = collectionCardData.slice(start, (collectionCardData.length - paginatedCollectionCardData.length));
      }catch (e){}
    }

      setPaginatedCollectionCardData(prevState => ([...prevState, ...nextCollectionCardData]));
      setIsFetching(false);
  }


  useEffect(async () => {
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
    setPaginatedCollectionCardData(sortedAttr.slice(0, perPage));
    console.log(sortBy)
  }, [sortBy]);

  function getRarity(i,trait_type,trait_type_value) {
    return findOcc(traits,trait_type,trait_type_value);
  }

  function findOcc(arr, key, value){
    let arr2 = [];

    arr.forEach((x)=>{

      // Checking if there is any object in arr2
      // which contains the key value
      if(arr2.some((val)=>{ return val[key][value] == x[key][value] })){

        // If yes! then increase the occurrence by 1
        arr2.forEach((k)=>{
          if(k[key] === x[key]){
            k["occurrence"]++
          }
        })

      }else{
        // If not! Then create a new object initialize
        // it with the present iteration key's value and
        // set the occurrence to 1
        let a = {}
        a[key] = x[key]
        a["occurrence"] = 1
        arr2.push(a);
      }
    })

    return arr2
  }

  function comparisonTraits(i) {
    setShowModal(true);
    if (paginatedCollectionCardData[i]) {
      setRarityTraits(paginatedCollectionCardData[i].attributes.map((attribute) => {
          attribute.rarity = getRarity(i, attribute.trait_type_index, attribute.value);
          console.log(attribute.rarity)
          return (<li key={"comparisonTraits" + i}>
            <h3 className="rarity-header">{attribute.trait_type}: <span>{attribute.value}</span></h3><strong>{attribute.rarity.length > 0 && attribute.rarity[0].occurrence}</strong> of
            other cards have this feature
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
                <button style={{background:'black',color:'white',width:'50%','margin':'auto'}} onClick={()=>comparisonTraits(index)}>Rarity</button>
              </div>
          );
        })}

        <ReactModal
            isOpen={showModal}
            style={customStyles}
            contentLabel="Rarity"
        >
          <h2 className="text-black Poppitandfinchsans text-left text-6xl">Rarity</h2>
          <ul>
            {rarityTraits}
          </ul>
          <button className="closemodal" onClick={ ()=> setShowModal(false)}>Close</button>
        </ReactModal>
      </div>
  );
}
