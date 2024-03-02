import Head from 'next/head'
import Navigation from '../components/navigation'
import Web3 from "web3";
import { ethers } from "ethers";
import {decodeCashAddress} from '@bitauth/libauth'
import { useState, useEffect } from 'react';

export default function Home() {

    // FOR WALLET
    const [signedIn, setSignedIn] = useState(false)
    const [sbchWalletAddress, setSbchWalletAddress] = useState(null)
    const [cashtokensAddr, setCashtokensAddr] = useState(null)
    const [userBurnedNfts, setUserBurnedNfts] = useState(null)
    const [nftsBridged, setNftsBridged] = useState(null)
    const [failedToFetch, setFailedToFetch] = useState(false)
    const [validTokenAddress, setValidTokenAddress] = useState(undefined)
    const [orderId, setOrderId] = useState(null)

    const serverUrl = "https://puffers.reapers.cash"

    function isTokenAddress(address) {
      const result = decodeCashAddress(address);
      if (typeof result === 'string') throw new Error(result);
      const supportsTokens = (result.type === 'p2pkhWithTokens' || result.type === 'p2shWithTokens');
      return supportsTokens;
    }
  
    useEffect(() => {
      async function fetchNumberBridged(){
        try{
          signIn()
          const fetchBackend = await fetch(serverUrl);
          const jsonResult = await fetchBackend.json()
          setNftsBridged(jsonResult?.nftsBridged)
        } catch(error){
          console.log(error);
          setFailedToFetch(true);
        }
      }
      fetchNumberBridged()
    }, [])

    useEffect(() => {
      const getUserBurnedPuffers = async () => {
        try {
          const res = await fetch(serverUrl+'/address/'+ sbchWalletAddress);
          const userBurnedPuffers = await res.json();
          const listNftItems = userBurnedPuffers.filter(item => !item.orderid)
          const listNftNumbers = listNftItems.map(item => item.nftnumber)
          setUserBurnedNfts(listNftNumbers)
        } catch (error) {
          console.log(error);
          setFailedToFetch(true);
        }
      };

      getUserBurnedPuffers();
        
      const refetch = setInterval(() => {
        getUserBurnedPuffers();
      }, 5000);
    
      return () => clearInterval(refetch);
    }, [sbchWalletAddress])

    useEffect(() => {
      if(!validTokenAddress){
        setOrderId(null)
        return
      }
      const createOrder = async () => {
        try {
          // use ethers instead of Web3 because Web3 prefixes message
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()   
          const signature = await signer.signMessage(cashtokensAddr);
          const rawResponse = await fetch(serverUrl+'/signbridging', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({signature, sbchOriginAddress:sbchWalletAddress, destinationAddress:cashtokensAddr, nftList:userBurnedNfts})
          });
          const response = await rawResponse.json();
          console.log(response)
          setOrderId(response.orderId)
        } catch (error) {
          console.log(error);
          setFailedToFetch(true);
        }
      };

      createOrder();
    }, [validTokenAddress])
    
  
    async function signIn() {
      if (typeof window.web3 !== 'undefined') {
        // Use existing gateway
        window.web3 = new Web3(window.ethereum);
  
  
        const walletAddress = (await web3.eth.getAccounts())[0];
        setSbchWalletAddress(walletAddress);
      } else {
        alert("No Ethereum interface injected into browser. Read-only access");
      }
  
      window.ethereum?.enable()
        .then(async function () {
          window.web3.eth.net.getNetworkType()
              // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
    
              .then((network) => {console.log(network);if(network != "private"){
                alert("You are on " + network + " network. Change Metamask network to smartBCH or you won't be able to do anything here")}
              });
          const walletAddress = (await web3.eth.getAccounts())[0];
          setSbchWalletAddress(walletAddress)
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
        setCashtokensAddr(userAddress)
      } catch {}
      setValidTokenAddress(isValidAddress)
    };

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Poolside Puffers - Bridge</title>
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
          : <button onClick={signOut} className="montserratinline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {sbchWalletAddress.slice(0,20) + "..."}</button>
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
              {failedToFetch ? <strong>failed to reach backend... </strong> :<>
            {! sbchWalletAddress?
              <p className="text-xl montserrat text-white my-9">
                Connect your MetaMask Wallet to bridge...
              </p> 
            : <div>
                <p className="montserrat">
                  To bridge your Poolside Puffers, send your Puffers to the SBCH burn address <br/>
                  <code className="text-white">0x000000000000000000000000000000000000dead</code><br/>
                </p>
                
                {!userBurnedNfts?.length ? 
                <div>
                  <p className="mt-4 montserrat">
                    Listening for incoming transactions...
                  </p>
                  <p className='mt-5'><strong>Note: </strong>bridging to CashTokens is only one way, your Puffers cannot be returned to SBCH.</p>
                </div>
                : <><p className="mt-4 montserrat">
                    Your Poolside Puffers <span className="text-white">{userBurnedNfts.map(n => `#${n}`).join(", ")} </span>
                    are ready to be bridged!
                  </p>
                  <p className="mt-4 montserrat">Input a CashTokens receiving address from 
                    {" "}<a href="https://cashonize.com/" target="_blank" className="underline text-blau">Cashonize</a>,
                    {" "}<a href="https://zapit.io/" target="_blank" className="underline text-blau">Zapit</a>
                    {" or "}<a href="https://www.paytaca.com/" target="_blank" className="underline text-blau">Paytaca</a> wallet:
                  </p>               
                  <input onChange={(e) => inputUserAdrr(e)} style={{width:"350px", padding:"4px 6px"}} placeholder="CashTokens Address" className='mt-1'/>
                  {validTokenAddress? <span className="text-xl"> ✅</span>:null}
                  {validTokenAddress === false ?<div id="addressError" style={{color: "black", fontWeight: "500", marginTop: "10px"}}>
                    Not a valid CashTokens address.
                  </div> : null}

                  {!validTokenAddress ?<div className="mt-5 Poppitandfinchsans text-4xl border-6 bg-blau  text-white p-2 ">
                    Complete bridge payment ({0.005 * userBurnedNfts.length} BCH)
                  </div> : null}
                </>}

                {userBurnedNfts?.length && validTokenAddress && !orderId?
                  <div className='mt-5'>Sign CashTokens address in MetaMask...</div>
                :null}

                {userBurnedNfts?.length && orderId ?
                  <form name="prompt-cash-form" action="https://prompt.cash/pay" method="get">
                    <input type="hidden" name="token" value="956-3A2pABrf"/>
                    <input type="hidden" name="tx_id" value={orderId}/>
                    <input type="hidden" name="amount" value={0.005 * userBurnedNfts.length}/>
                    <input type="hidden" name="currency" value="BCH"/>
                    <input type="hidden" name="return" value={"https://puffers.cash/success?orderid="+orderId}/>
                    <input type="hidden" name="callback" value={serverUrl+"/callback"}/>
                    <button type="submit" className="mt-5 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2" style={{width:"100%"}}>
                    Complete bridge payment ({0.005 * userBurnedNfts.length} BCH)
                  </button>
                  </form>
                   : null
              }
              </div>
            }</>
            }
              <p className="mt-5">
                ❤️ <strong>100% OF BRIDGE FEES WILL BE DONATED TO </strong>
                <a href="https://www.facebook.com/pages/Tr%E1%BA%A1i%20Tr%E1%BA%BB%20M%E1%BB%93%20C%C3%B4i,%20Khuy%E1%BA%BFt%20T%E1%BA%ADt%20K291%20L%C3%AA%20V%C4%83n%20Hi%E1%BA%BFn%20-%20%C4%90%C3%A0%20N%E1%BA%B5ng/735114560005794/" className="underline text-blau">Orphanage - Disabled Children</a>
                , K291 Lê Văn Hiến Da Nang, Vietnam
              </p>
            </div>
          </div> 
        </div>
      </div>  

    </div>
  )
}