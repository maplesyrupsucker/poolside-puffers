import { useState, useEffect } from 'react';

export default function PufferCard({ pufferContract,walletAddress}) {
    const [pufferCardData, setPufferCardData] = useState([])


    function renderCards() {
        const pufferList = [];

        if (pufferCardData.length == 0) {
            pufferList.push(
                <div className="puffer flex flex-col">
                    <img src="images/loading.gif" alt="loading" className="loading"></img>
                    <h2 className="Poppitandfinchsans text-center text-2xl text-black">Searching Blockchain...</h2>
                </div>
            );
        }


        for (var i = 0; i < pufferCardData.length; i++) {
            console.log(pufferCardData);
            var obj = pufferCardData[i];
            var attributes = obj.attributes;

                pufferList.push(
                <div className="puffer flex flex-col">
                    <div className="rare">
                    {attributes.map((attributes) => {

                        
                        if (attributes.value.indexOf("Animated") >= 0) {
                            return <span><img src="images/diamond.png" alt="rare" className="diamond"></img><img src="images/diamond.png" alt="rare" className="diamond"></img></span>
                        }
                        if (attributes.value.indexOf("Ripped") >= 0) {
                            return <img src="images/diamond.png" alt="rare" className="diamond"></img>
                        }
                        if (attributes.value.indexOf("Cigarette") >= 0) {
                            return <img src="images/diamond.png" alt="rare" className="diamond"></img>
                        }
                        if (attributes.value.indexOf("Joint") >= 0) {
                            return <img src="images/diamond.png" alt="rare" className="diamond"></img>
                        }
                        if (attributes.value.indexOf("Pool Animated") >= 0) {
                            return <span><img src="images/diamond.png" alt="rare" className="diamond"></img><img src="images/diamond.png" alt="rare" className="diamond"></img><img src="images/diamond.png" alt="rare" className="diamond"></img></span>
                        }
                    })}
                    </div>
                    <img src={obj.image} alt={obj.name}></img>
                    <h3 className="Poppitandfinchsans text-center text-4xl text-black">{obj.name}</h3>
                    <p className="Poppitandfinchsans text-center text-black">Traits:</p>
                    <ul className="pufferAttributes ">
                        {attributes.map((attributes) => {
                            
                            return <li><span>{attributes.trait_type}:</span> {attributes.value}</li>
                        })}
                    </ul>

                    
                </div>
            );
        }

        return pufferList;
    }

    useEffect( async() => {
        const bal = await pufferContract.methods.balanceOf(walletAddress).call();
        const make_range = (s, e) => Array(e - s + 1).fill().map((_, i) => s + i);
        const CHUNK_SIZE = 10; // in case we have tooo many

        // const tokens = [];
        for (let c = 0; c < bal; c += CHUNK_SIZE) {
            const r = make_range(c, Math.min(bal - 1, c + CHUNK_SIZE));
            console.log(r);

            try {
                const ids = await Promise.all(r.map((i) =>
                    pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call()
                ));
                console.log(ids);

                const objs = await Promise.all(ids.map((id) =>
                    pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call()
                ));
                console.log(objs);

                // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app
                // const attrs = await Promise.all(objs.map((obj) =>
                //   fetch(obj).then((res) => res.json())
                // ));
                // console.log(attrs);

                const attrs = await Promise.all(ids.map((id) =>
                    fetch(`/api/${id}`).then((res) => res.json())
                ));

                setPufferCardData(attrs);
            } catch (e) {
                console.error(e);
            }
        }

    }, []);

    return (<div id="puffer-pool" className="flex flex-wrap justify-center">{renderCards()}</div>);
}