import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_puffers, set_how_many_puffers] = useState(1)

  const [pufferContract, setPufferContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [pufferPrice, setPufferPrice] = useState(0)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No web3 interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "private"){
          alert("You are on " + network + " network. Change Metamask network to smartBCH or you won't be able to do anything here")} 
        });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const pufferContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setPufferContract(pufferContract)

    const salebool = await pufferContract.methods.saleIsActive().call() 
    console.log("saleisActive" , salebool)

    setSaleStarted(salebool)

    const totalSupply = await pufferContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const pufferPrice = await pufferContract.methods.pufferPrice().call() 
    setPufferPrice(pufferPrice)
   
  }
  
  async function mintPuffer(how_many_puffers) {
    if (pufferContract) {
 
      const price = Number(pufferPrice)  * how_many_puffers 

      const gasAmount = await pufferContract.methods.mintBoringPuffer(how_many_puffers).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      pufferContract.methods
            .mintBoringPuffer(how_many_puffers)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  



  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mint - Poolside Puffers</title>
        <link rel="icon" href="/images/favicon.png" />

        <meta property="og:title" content="Poolside Puffers" key="ogtitle" />
        <meta property="og:description" content="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://puffers.cash" key="ogurl"/>
        <meta property="og:image" content="https://puffers.cashimages/puffers-bch.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://puffers.cash" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="poolsidepuffers.cash" key="twdomain" />
        <meta property="twitter:url" content="https://puffers.cash" key="twurl" />
        <meta name="twitter:title" content="Poolside Puffers" key="twtitle" />
        <meta name="twitter:description" content="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="twdesc" />
        <meta name="twitter:image" content="https://puffers.cashimages/puffers-bch.gif" key="twimage" />
      </Head>
      <div >
      <div className="flex items-center justify-between w-full border-b-2">
      <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/" className="text-4xl text-white hover:text-black m-3">Home</a>
              <a href="/mint" className="text-4xl hover:text-black m-3 text-blau">MINT!</a>
              <a href="/your-pool" className="text-4xl text-white hover:text-black m-3">Your Pool</a>
              {/* <a href="https://twitter.com/poolsidepuffers" className="text-4xl text-white hover:text-black m-3">TWITTER</a> */}
              <a href="https://t.me/poolsidepuffers" className="text-4xl text-white hover:text-black m-3">TELEGRAM</a>
            </nav>
             
          </div>
          <div className="flex auth font-bold  connect-btn  justify-center items-center">
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserratinline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div>
        </div>

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt3 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL PUFFERS CAUGHT:  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 2100</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">REEL IN</span>
                  
                  <input 
                    type="number" 
                    min="1"
                    max="25"
                    value={how_many_puffers}
                    onChange={ e => set_how_many_puffers(e.target.value) }
                    name="" 
                    className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                />
                  
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">PUFFERS!</span>
    
                </div>
                <small>To avoid overfishing, we limit 25 puffers per mint transaction.</small>
                {saleStarted ? 
                <button onClick={() => mintPuffer(how_many_puffers)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">CATCH {how_many_puffers} puffers for {(pufferPrice * how_many_puffers) / (10 ** 18)} BCH + GAS</button>        
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
            
              }

              <h3 className="mt-5 text-2xl">Visit <a href="/your-pool" className="underline">Your Pool</a> to view your puffers!</h3>
              <p><a href="https://smartbch.org/" target="_blank"><img src="images/smartbch.png" alt="smartbch" className="smartbch"/></a>
              <a href="https://bitcoincash.org/" target="_blank"><img src="images/bitcoin-cash-logo-horizontal-wt.svg" alt="BCH" className="bch"/></a></p>
              <p class="mt-5"><a href="https://read.cash/@carisdaneym2/how-to-set-up-smartbch-network-on-metamask-and-smartbch-coinflex-bridge-7f64c443" className="underline">How to setup Metamask with smartBCH &amp; Bridge BCH</a> | <a href="https://read.cash/@maplesyrupsuckr/announcing-poolside-puffers-help-mint-2100-nfts-and-support-a-local-vietnamese-orphanage-0557fc83" className="underline">About Poolside Puffers</a></p>

            </div> 
            </div>
 
          </div>  
    </div>  
    )
  }