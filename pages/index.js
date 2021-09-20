import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Poolside Puffers</title>
        <link rel="icon" href="/images/favicon.png" />

        <meta property="og:title" content="Poolside Puffers" key="ogtitle" />
        <meta property="og:description" content="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://puffers.cash/" key="ogurl"/>
        <meta property="og:image" content="https://puffers.cash/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://puffers.cash/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="puffers.cash" key="twdomain" />
        <meta property="twitter:url" content="https://puffers.cash/" key="twurl" />
        <meta name="twitter:title" content="Poolside Puffers Co." key="twtitle" />
        <meta name="twitter:description" content="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="twdesc" />
        <meta name="twitter:image" content="https://puffers.cash/images/Hola.gif" key="twimage" />
      </Head>


        

      <div >
          <div className="flex items-center justify-between w-full border-b-2">
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="#" className="text-4xl text-white hover:text-black m-3">Home</a>
              <a href="/mint" className="text-4xl hover:text-black m-3 text-blau">MINT!</a>
              <a href="https://twitter.com/poolsidepuffers" className="text-4xl text-white hover:text-black m-3">TWITTER</a>
              <a href="#" className="text-4xl text-white hover:text-black m-3">TELEGRAM</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-3/3 w-4/5 " id="about">
       
        
          <div className="mt-6 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="w-4/4 lg:w-2/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">Poolside Puffers</h1>
                    <p className="text-2xl text-white my-6  montserrat">Catch a <span className="text-5xl Poppitandfinch text-blau">Poolside</span> <span className="text-blau text-5xl Poppitandfinchsans">Puffer</span> and join the party. </p>
                    
                    <p className="text-2xl text-white my-6  montserrat">A friendly art project to introduce the Bitcoin Cash community to smartBCH NFT's. Try to find a rare animated NFT!</p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> Sept 26 2021. <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY:</strong> 2100 Puffers.<br/><strong>PRICE:</strong> 0.025 BCH each.</span></p>

                    <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 mint-btn ">GO TO MINTING PAGE!</a>
                    <a href="https://smartbch.org/" target="_blank"><img src="images/smartbch.png" alt="smartbch" className="smartbch"/></a>
                    <a href="https://bitcoincash.org/" target="_blank"><img src="images/bitcoin-cash-logo-horizontal-wt.svg" alt="BCH" className="bch"/></a>
                    <p class="mt-5"><a href="https://read.cash/@Pjman7/how-to-add-smartbch-on-metamask-or-brave-wallet-f9abf092" className="underline">How to setup Metamask with smartBCH</a></p>
                  </div>
                  
                  <a href="/mint"><img className="w-4/4" src="images/puffers-bch.gif" alt="Poolside Puffers"/></a>
            </div>
            <div className="flex flex-col items-center">

                
                
            </div> 
            </div>
              
              
              
          </div>  
    </div>  
    )
  }