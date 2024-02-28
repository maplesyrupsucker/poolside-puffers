import Head from 'next/head'
import Navigation from '../components/navigation'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';

export default function Success() {
  const [orderId, setOrderId] = useState(undefined);
  const [myorder, setMyorder] = useState(undefined);
  const [failedToFetch, setFailedToFetch] = useState(false);

  const searchParams = useSearchParams()
  const serverUrl = "https://puffers.reapers.cash"
 
  useEffect(() => {
    const orderid = searchParams.get('orderid')
    setOrderId(orderid)
  }, [searchParams])
  
  useEffect(() => {
    async function fetchData() {
      try{
        const fetchBackend = await fetch(serverUrl+"/recentorders");
        const jsonResult = await fetchBackend.json();
        const myorder = jsonResult.find(item => item.id == orderId);
        setMyorder(myorder)
      } catch(error){
        console.log(error);
        setFailedToFetch(true)
      }  
    }
    if(orderId) fetchData();
  }, [orderId])

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Poolside Puffers - Bridging successful</title>
        <link rel="icon" href="/images/favicon.png" />

        <meta property="og:title" content="Poolside Puffers" key="ogtitle" />
        <meta property="og:description" content="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://puffers.cash/" key="ogurl"/>
        <meta property="og:image" content="https://puffers.cash/images/puffers-bch.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://puffers.cash/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="puffers.cash" key="twdomain" />
        <meta property="twitter:url" content="https://puffers.cash/" key="twurl" />
        <meta name="twitter:title" content="Poolside Puffers" key="twtitle" />
        <meta name="twitter:description" content="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="twdesc" />
        <meta name="twitter:image" content="https://puffers.cash/images/puffers-bch.gif" key="twimage" />
      </Head>

    <Navigation/>

    <div className="md:w-2/3 w-4/5">
       
        
        <div className="mt3 border-b-2 py-6">

          <div className="flex flex-col items-center">
            <div id="mint" className="flex justify-around mx-6">
              <div><h3 className="Poppitandfinchsans text-6xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">
                BRIDGED SUCESSFULLY! 
              </h3></div>
            </div>
            <br/>
            {failedToFetch ? <strong>failed to reach backend... </strong> :
            <div className="text-2xl text-white my-6  montserrat" >
              <div className="text-white text-2xl montserrat">
                  <strong>TxId:</strong> {myorder?.txidbch}
                </div>
                <div className="text-white text-2xl montserrat">
                  <strong>Address:</strong> {myorder?.destinationaddress}
                </div>
                <div className="text-white text-2xl montserrat">
                  <strong>Bridged Puffers:</strong> {myorder?.nftlist.map(n => `#${n}`).join(", ")}
                </div>
                <div className="text-white text-2xl montserrat">
                  <strong>Proceeds to charity:</strong> {myorder?.amountbchpaid +" BCH"}
                </div>
            </div>}
            
          </div>
        </div>
      </div>
  </div>)
}