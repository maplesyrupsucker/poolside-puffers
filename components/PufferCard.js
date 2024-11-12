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

const IPFS_GATEWAYS = [
  "https://ipfs.io/ipfs/",
  "https://gateway.pinata.cloud/ipfs/",
  "https://ipfs.kxv.io/ipfs/",
  "https://ipfs.eth.aragon.network/ipfs/"
];

export default function PufferCard({ pufferContract, walletAddress,sortBy }) {
  const [allPufferCardData, setAllPufferCardData] = useState([]);
  const [pufferCardData, setPufferCardData] = useState([]);
  const [paginatedPufferCardData, setPaginatedPufferCardData] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(listMorePuffers);
  const [showModal, setShowModal] = useState(false);
  const [showBridgeModal, setShowBridgeModal] = useState(false);
  const [selectedPuffer, setSelectedPuffer] = useState(null);
  const [rarityTraits, setRarityTraits] = useState([]);
  const [rarityImage, setRarityImage] = useState('');
  const [rarityImageIPFS, setRarityImageIPFS] = useState('');
  const [rarityName, setRarityName] = useState('');
  const [rarityDiamonds, setRarityDiamonds] = useState('');
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
  
  let perPage=21;

  function loadAlternative(element, index = 0) {
    if (index >= IPFS_GATEWAYS.length) {
      element.src = "images/error.png"; // fallback image if all gateways fail
      return;
    }

    element.src = IPFS_GATEWAYS[index] + element.dataset.ipfs;
    element.onerror = () => {
      setTimeout(() => loadAlternative(element, index + 1), 1000);
    };
  }

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
      setRarityImageIPFS(paginatedPufferCardData[i].image?.replace('ipfs://', '') || '');
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

  async function bridge(obj) {
    console.log(obj);
    if (!obj.tokenId) {
      alert("something went wrong");
    } else {
      setSelectedPuffer(obj);
      setShowBridgeModal(true);
    }
  }

  async function confirmBridge() {
    const address = "0x000000000000000000000000000000000000dead";
    
    try {
      await pufferContract.methods
        .safeTransferFrom(walletAddress, address, selectedPuffer.tokenId)
        .send({
          from: walletAddress,
        });
      setShowBridgeModal(false);
    } catch (error) {
      console.error("Bridge failed:", error);
      alert("Bridge failed. Please try again.");
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

      // Add imageIPFS field by extracting from image URL
      sortedAttr = sortedAttr.map(attr => ({
        ...attr,
        imageIPFS: attr.image?.replace('ipfs://', '') || ''
      }));

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

          return (
              <div className="puffer flex flex-col" key={obj.tokenId}>
                <div className="rare">
                  <span>
                    {diamondArray.map((_, i) => (
                      <img
                        key={`diamond-${i}`}
                        src="images/diamond.png"
                        alt="rare"
                        className="diamond"
                      />
                    ))}
                    {pureBloodArray.map((_, i) => (
                      <img
                        key={`pureblood-${i}`}
                        src="images/pureblood.png"
                        alt="pure blood"
                        className="diamond"
                      />
                    ))}
                    {halfBloodArray.map((_, i) => (
                      <img
                        key={`halfblood-${i}`}
                        src="images/halfblood.png"
                        alt="half blood"
                        className="diamond"
                      />
                    ))}
                  </span>
                </div>
                <img
                    src={`https://ipfs.io/ipfs/${obj.imageIPFS}`}
                    alt={obj.name}
                    data-ipfs={obj.imageIPFS}
                    onError={(e) => loadAlternative(e.target)}
                />
                <h3 className="Poppitandfinchsans text-center text-4xl text-black">
                  {obj.name}
                </h3>
                <p className="Poppitandfinchsans text-center text-black">Traits:</p>
                <ul className="pufferAttributes ">
                  {attributes.map((attribute) => (
                    <li key={attribute.trait_type}>
                      <span>{attribute.trait_type}:</span> {attribute.value}
                    </li>
                  ))}
                </ul>
                <br/>
                <button className="rarity" onClick={()=>openTraitsModal(index)}>Rarity</button>
                <br/>
                <div style={{ position:"absolute", bottom: "0px", right:"0px"}}>
                  <button className="transfer" onClick={() => transfer(obj)}>
                    Transfer💌
                  </button>
                  <button className="transfer" onClick={() => bridge(obj)}>
                    Bridge 🌉
                  </button>
                </div>
                
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
              src={`https://ipfs.io/ipfs/${rarityImageIPFS}`}
              alt={rarityName}
              data-ipfs={rarityImageIPFS}
              onError={(e) => loadAlternative(e.target)}
              style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
          />
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
          
          <button className="closemodal" onClick={ ()=> setShowModal(false)} style={{
            position: 'absolute',
            top: '5px',
            left: 'auto',
            right: '20px',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            height: '50px',
            width: '50px'
          }}>
            &#10005;
          </button>
        </ReactModal>

        <ReactModal
          isOpen={showBridgeModal}
          style={customStyles}
          contentLabel="Bridge Confirmation"
        >
          <h2 className="text-black Poppitandfinchsans text-center text-4xl mb-4">Bridge Confirmation</h2>
          <p className="text-center mt-4 mb-4">
            Are you sure you want to bridge Puffer #{selectedPuffer?.tokenId} to CashTokens? 
            This action cannot be undone.<br/>
            <strong>Note this is a one way action and cannot be reversed.</strong>
          </p>
          <div className="flex justify-center gap-4">
            <button className="transfer btn-primary" onClick={confirmBridge} style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
              Confirm Bridge
            </button>
            <button className="transfer btn-secondary" onClick={() => setShowBridgeModal(false)} style={{backgroundColor: '#f44336', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
              Cancel
            </button>
          </div>
          <button className="closemodal" onClick={() => setShowBridgeModal(false)} style={{
            position: 'absolute',
            top: '5px',
            left: 'auto',
            right: '20px',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            height: '50px',
            width: '50px'
          }}>
            &#10005;
          </button>
        </ReactModal>

        <br/>
        {
          showLoadMoreButton && <div className="loader"><button onClick={() => listMorePuffers()}>Load more..</button></div>
        }
</div>
);
}