import Head from 'next/head'
import Navigation from '../components/navigation'
import Web3 from "web3";
import {decodeCashAddress} from '@bitauth/libauth'
import { useState, useEffect } from 'react';

export default function Home() {

    // FOR WALLET
    const [signedIn, setSignedIn] = useState(false)
    const [walletAddress, setWalletAddress] = useState(null)
    const [userBurnedNfts, setUserBurnedNfts] = useState(null)
    const [nftsBridged, setNftsBridged] = useState(null)
    const [validTokenAddress, setValidTokenAddress] = useState(undefined)

    const serverUrl = "https://api.reapers.cash"

    function isTokenAddress(address) {
      const result = decodeCashAddress(address);
      if (typeof result === 'string') throw new Error(result);
      const supportsTokens = (result.type === 'p2pkhWithTokens' || result.type === 'p2shWithTokens');
      return supportsTokens;
    }
  
    useEffect( async() => {
      await new Promise(resolve => setTimeout(resolve, 500));
      signIn()
      const fetchBackend = await fetch(serverUrl);
      const jsonResult = await fetchBackend.json()
      setNftsBridged(jsonResult?.nftsBridged)
    }, [])

    useEffect(() => {
      const getUserBurnedPuffers = async () => {
        try {
          const res = await fetch(serverUrl+'/address/'+ walletAddress);
          const userBurnedPuffers = await res.json();
          const listNftItems = userBurnedPuffers.filter(item => !item.timebridged)
          const listNftNumbers = listNftItems.map(item => item.nftnumber)
          setUserBurnedNfts(listNftNumbers)
        } catch (error) {
          console.log(error);
        }
      };

      getUserBurnedPuffers();
        
      const refetch = setInterval(() => {
        getUserBurnedPuffers();
      }, 5000);
    
      return () => clearInterval(refetch);
    }, [walletAddress])
    
  
    async function signIn() {
      if (typeof window.web3 !== 'undefined') {
        // Use existing gateway
        window.web3 = new Web3(window.ethereum);
  
  
        const walletAddress = (await web3.eth.getAccounts())[0];
        setWalletAddress(walletAddress);
      } else {
        alert("No Ethereum interface injected into browser. Read-only access");
      }
  
      window.ethereum?.enable()
          .then(function (accounts) {
            window.web3.eth.net.getNetworkType()
                // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
  
                .then((network) => {console.log(network);if(network != "private"){
                  alert("You are on " + network + " network. Change Metamask network to smartBCH or you won't be able to do anything here")}
                });
            let wallet = accounts[0]
            setWalletAddress(wallet)
            setSignedIn(true)
  
          })
          .catch(function (error) {
            // Handle error. Likely the user rejected the login
            console.error(error)
          })
    }
  
    async function signOut() {
      setSignedIn(false)
    }

    function inputUserAdrr (event) {
      const userAddress = event.target.value;
      if(!userAddress){ 
        setValidTokenAddress(undefined)
        return
      }
      let isValidAddress = false
      try{
        isValidAddress = isTokenAddress(userAddress)
      } catch {}
      setValidTokenAddress(isValidAddress)
    };

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Poolside Puffers - Trait Rarity</title>
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
      
      <div className="flex auth my-8 font-bold  connect-btn  justify-center items-center vw2">
        {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
          : <button onClick={signOut} className="montserratinline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress.slice(0,20) + "..."}</button>
        }
      </div>

      <div className="md:w-2/3 w-4/5">
       
        
        <div className="mt3 border-b-2 py-6">

          <div className="flex flex-col items-center">
            <div id="mint" className="flex justify-around mx-6">
              <div><h3 className="Poppitandfinchsans text-6xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">BRIDGE NOW!</h3></div>
            </div>

            <div className='my-3'>
              <a href="https://smartbch.org/" target="_blank"><img src="images/smartbch.png" alt="smartbch" className="smartbch" style={{marginTop:"0px"}}/></a>
              ➔
              <a href="https://bitcoincash.org/" target="_blank"><img src="images/bitcoin-cash-logo-horizontal-wt.svg" alt="BCH" className="bch"  style={{marginTop:"0px", marginLeft:"10px"}}/></a>
            </div>

            <p className="text-2xl text-white my-6  montserrat" style={{display:"flex", justifyContent:"center", margin:"0"}}>
              <span className="text-white text-2xl montserrat">
                  <strong>BRIDGE PRICE:</strong> 0.005 BCH each
                </span>
            </p>
            
          <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-3 ">
            TOTAL PUFFERS RESCUED: 
            <span className="text-blau text-6xl" style={{marginLeft:"25px"}}> {nftsBridged} / 2100</span>
          </span>

          <div className='w-4/4 lg:w-3/4 text-center'>
            {! walletAddress?
              <p className="text-xl montserrat text-white">
                Connect your MetaMask Wallet to bridge...
              </p> : <div>
                <p className="montserrat">
                  To bridge your Poolside Puffers, send your Puffers to the SBCH burn address <br/>
                  <code className="text-white">0x000000000000000000000000000000000000dead</code><br/>
                </p>
                
                {!userBurnedNfts?.length ? 
                <p className="mt-4 montserrat">
                  Listening for incoming transactions...
                </p>
                : <><p className="mt-4 montserrat">
                    Your Poolside Puffers <span className="text-white">{userBurnedNfts.map(n => `#${n}`).join(", ")} </span>
                    are ready to be bridged!
                  </p>
                  <p className="mt-4 montserrat">Input a CashTokens receiving address below:</p>
                  <input onChange={(e) => inputUserAdrr(e)} style={{width:"350px", padding:"4px 6px"}} placeholder="CashTokens Address"/>
                  {validTokenAddress? <span className="text-xl"> ✅</span>:null}
                  {validTokenAddress === false ?<div id="addressError" style={{color: "black", fontWeight: "500", marginTop: "10px"}}>
                    Not a valid CashTokens address.
                  </div> : null}

                  {!validTokenAddress ?<div className="mt-5 Poppitandfinchsans text-4xl border-6 bg-blau  text-white p-2 ">
                    Complete bridge payment ({0.005 * userBurnedNfts.length} BCH)
                  </div> : null}
                </>}

                {userBurnedNfts?.length && validTokenAddress ? 
                  <button className="mt-5 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2" style={{width:"100%"}}>
                    Complete bridge payment ({0.005 * userBurnedNfts.length} BCH)
                  </button> : null
              }

              </div>
            }
          </div>

            <p className='mt-5'><strong>Note: </strong>bridging to CashTokens is only one way, your Puffers cannot be returned to SBCH.</p>
          </div> 
        </div>
      </div>  

    </div>
  )
}