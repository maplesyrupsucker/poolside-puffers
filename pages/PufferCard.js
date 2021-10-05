import { useState, useEffect } from "react";

export default function PufferCard({ pufferContract, walletAddress }) {
  const [pufferCardData, setPufferCardData] = useState([]);
  // const [pufferContract, setPufferContract] = useState(null)

  async function transfer(obj) {
    console.log(obj);
    if (!obj.tokenId) {
      alert("something went wrong");
    } else {
      // const pufferContract = new window.web3.eth.Contract(ABI, ADDRESS)
      let address = prompt("where would you like to send the NFT to?");
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
    const bal = await pufferContract.methods.balanceOf(walletAddress).call();
    const make_range = (s, e) =>
      Array(e - s + 1)
        .fill()
        .map((_, i) => s + i);
    const c = 0;
    const CHUNK_SIZE = 2100; // in case we have tooo many

    const r = make_range(0, Math.min(bal - 1, c + CHUNK_SIZE));

    try {
      const ids = await Promise.all(
        r.map((i) =>
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

      // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app
      // const attrs = await Promise.all(objs.map((obj) =>
      //   fetch(obj).then((res) => res.json())
      // ));
      // console.log(attrs);

      const attrs = await Promise.all(
        ids.map((id) => fetch(`/api/${id}`).then((res) => res.json()))
      );

      setPufferCardData(attrs);
    } catch (e) {
      console.error(e);
    }
  }, []);

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
      {pufferCardData.map((obj) => {
        const { attributes } = obj;
        console.log(obj);
        return (
          <div className="puffer flex flex-col" key={obj.tokenId}>
            <div className="rare">
              {attributes.map((attributes) => {
                if (attributes.value.indexOf("Animated") >= 0) {
                  return (
                    <span>
                      <img
                        src="images/diamond.png"
                        alt="rare"
                        className="diamond"
                      ></img>
                      <img
                        src="images/diamond.png"
                        alt="rare"
                        className="diamond"
                      ></img>
                    </span>
                  );
                }
                if (attributes.value.indexOf("Ripped") >= 0) {
                  return (
                    <img
                      src="images/diamond.png"
                      alt="rare"
                      className="diamond"
                    ></img>
                  );
                }
                if (attributes.value.indexOf("Cigarette") >= 0) {
                  return (
                    <img
                      src="images/diamond.png"
                      alt="rare"
                      className="diamond"
                    ></img>
                  );
                }
                if (attributes.value.indexOf("Joint") >= 0) {
                  return (
                    <img
                      src="images/diamond.png"
                      alt="rare"
                      className="diamond"
                    ></img>
                  );
                }
                if (attributes.value.indexOf("Summer") >= 0) {
                  return (
                    <img
                      src="images/diamond.png"
                      alt="rare"
                      className="diamond"
                    ></img>
                  );
                }
                if (attributes.value.indexOf("Pool") >= 0) {
                  return (
                    <img
                      src="images/diamond.png"
                      alt="rare"
                      className="diamond"
                    ></img>
                  );
                }
                if (attributes.value.indexOf("Pool Animated") >= 0) {
                  return (
                    <span>
                      <img
                        src="images/diamond.png"
                        alt="rare"
                        className="diamond"
                      ></img>
                      <img
                        src="images/diamond.png"
                        alt="rare"
                        className="diamond"
                      ></img>
                      <img
                        src="images/diamond.png"
                        alt="rare"
                        className="diamond"
                      ></img>
                    </span>
                  );
                }
              })}
            </div>
            <img src={obj.image} alt={obj.name}></img>
            <h3 className="Poppitandfinchsans text-center text-4xl text-black">
              {obj.name}
            </h3>
            <p className="Poppitandfinchsans text-center text-black">Traits:</p>
            <ul className="pufferAttributes ">
              {attributes.map((attributes) => {
                return (
                  <li>
                    <span>{attributes.trait_type}:</span> {attributes.value}
                  </li>
                );
              })}
            </ul>
            <button className="transfer" onClick={() => transfer(obj)}>
              Transfer
            </button>
          </div>
        );
      })}
    </div>
  );
}
