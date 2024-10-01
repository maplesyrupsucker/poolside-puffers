import Head from 'next/head'
import Navigation from '../components/navigation'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2 w-full">
      <Head>
        <title>Poolside Puffers - A smartBCH NFT Collection</title>
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

        <Navigation />

        <div className="md:w-3/3 w-full px-3" id="about">
       
        
          <div className="mt-6 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="w-full lg:w-2/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">Poolside Puffers</h1>
                    <p className="text-2xl text-white my-6  montserrat">Join the <span className="text-4xl Poppitandfinch text-blau">Poolside</span> <span className="text-blau text-4xl Poppitandfinchsans">Puffers Rescue</span> & bridge a puffer! </p>
                    
                    <p className="text-2xl text-white my-6  montserrat">A friendly art project to introduce the Bitcoin Cash community to smartBCH NFT's. Try to find a rare animated NFT!</p>
                    <h5 className="text-2xl text-black">
                      <strong>100% OF PROCEEDS DONATED TO:</strong>
                    </h5> 
                    <p className="text-white">
                    ❤️ <a href="https://www.facebook.com/pages/Tr%E1%BA%A1i%20Tr%E1%BA%BB%20M%E1%BB%93%20C%C3%B4i,%20Khuy%E1%BA%BFt%20T%E1%BA%ADt%20K291%20L%C3%AA%20V%C4%83n%20Hi%E1%BA%BFn%20-%20%C4%90%C3%A0%20N%E1%BA%B5ng/735114560005794/" className="underline text-blau">Orphanage - Disabled Children</a>, K291 Lê Văn Hiến Da Nang, Vietnam</p>

                    <a href="/bridge" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 mint-btn ">Rescue some Puffers!</a>
                    <a href="/collection" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 mint-btn ">VIEW THE COLLECTION</a> 
                    <a href="https://bitcoincash.org/" target="_blank" className='mr-5'><img src="images/bitcoin-cash-logo-horizontal-wt.svg" alt="BCH" className="bch"/></a>
                    <a href="https://smartbch.org/" target="_blank"><img src="images/smartbch.png" alt="smartbch" className="smartbch"/></a>
                    
                    <p className="mt-5">
                    <a href="https://read.cash/@maplesyrupsuckr/announcing-poolside-puffers-help-mint-2100-nfts-and-support-a-local-vietnamese-orphanage-0557fc83" className="underline">About Poolside Puffers</a><br/><br/>
                    <a href="https://news.bitcoin.com/smartbch-poolside-puffers-nft-collection-sells-out-in-3-days-100-of-proceeds-goes-to-orphanage-in-vietnam/" className="underline">"Smartbch Poolside Puffers NFT Collection Sells Out in 3 Days — 100% of Proceeds Goes to Orphanage in Vietnam"</a> - Bitcoin.com News
                    </p>

                    <div><p className="mt-5">CashTokens TokenId: <a className="text-blau" target='_blank' href='https://explorer.salemkode.com/token/8ded0441eab6fdb69560b396594861eb38b515bf98353e2b4d7ebdf388ebbec2' style={{wordBreak: 'break-all'}}>
                      8ded0441eab6fdb69560b396594861eb38b515bf98353e2b4d7ebdf388ebbec2</a></p>
                    </div>
                    <div><p className="mt-5">SmartBCH Contract: <span className="text-blau" style={{wordBreak: 'break-all'}}>0x88fA0495d5E9C1B178EAc1D76DF9D729e39fD8E8</span></p></div>
                    <div style={{alignSelf:"baseline", marginTop: "20px", padding: "30px", backgroundColor: "rgba(0, 255, 0, 0.3)", borderRadius: "15px", boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)", border: "2px solid #fff"}}>
                    <h3 className="text-3xl text-blau Poppitandfinchsans mb-4">Next Puffers Collection Coming Soon!</h3>
                    <p className="text-xl text-white montserrat">
                      Get ready for the next exciting addition to the Poolside Puffer universe!
                      Stay tuned for more details about our upcoming collection.
                    </p>
                  </div>
                  </div>
                  
                  <div style={{alignSelf:"baseline"}}>
                    <a href="/bridge"><img className="w-full" src="images/puffers-bch.gif" alt="Poolside Puffers"/></a>

                    <p className="text-2xl text-white my-6  montserrat" style={{display:"flex", justifyContent:"center", margin:"0"}}>
                      <span className="text-white text-2xl montserrat">
                        <strong>TOTAL SUPPLY:</strong> 2100 Puffers<br/>
                        <strong>BRIDGE PRICE:</strong> 0.005 BCH
                      </span>
                    </p>
                    
                  </div>

                  
            </div>
            <div className="flex flex-col items-center">

                
                
            </div> 
            </div>
              
          </div>  
    </div>  
    )
  }