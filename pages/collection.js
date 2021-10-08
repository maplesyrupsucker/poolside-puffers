import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"
import CollectionCard from "./CollectionCard";

export default function Pool() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  const [myTokenId, setMyTokenId] = useState(null)

  const [pufferContract, setPufferContract] = useState(null)

  const [pufferPrice, setPufferPrice] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleStarted, setSaleStarted] = useState(false)

  useEffect( async() => {

    signIn()
  }, [])


  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);


      const walletAddress = (await web3.eth.getAccounts())[0];
      setWalletAddress(walletAddress);
      const pufferContract = new window.web3.eth.Contract(ABI, ADDRESS)
      setPufferContract(pufferContract)

    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
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
          setMyTokenId(wallet)

        })
        .catch(function (error) {
          // Handle error. Likely the user rejected the login
          console.error(error)
        })
  }

  async function signOut() {
    setSignedIn(false)
  }

  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const pufferContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setPufferContract(pufferContract)

    const salebool = await pufferContract.methods.saleIsActive().call()
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await pufferContract.methods.totalSupply().call()
    setTotalSupply(totalSupply)

    const pufferPrice = await pufferContract.methods.pufferPrice().call()
    setPufferPrice(pufferPrice)

  }


  return (
      <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Collection - Poolside Puffers</title>
          <link rel="icon" href="/images/favicon.png" />

          <meta property="og:title" conpool="Poolside Puffers" key="ogtitle" />
          <meta property="og:description" conpool="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="ogdesc" />
          <meta property="og:type" conpool="website" key="ogtype" />
          <meta property="og:url" conpool="https://puffers.cash" key="ogurl"/>
          <meta property="og:image" conpool="https://puffers.cashimages/puffers-bch.gif" key="ogimage"/>
          <meta property="og:site_name" conpool="https://puffers.cash" key="ogsitename" />

          <meta name="twitter:card" conpool="summary_large_image" key="twcard"/>
          <meta property="twitter:domain" conpool="poolsidepuffers.cash" key="twdomain" />
          <meta property="twitter:url" conpool="https://puffers.cash" key="twurl" />
          <meta name="twitter:title" conpool="Poolside Puffers" key="twtitle" />
          <meta name="twitter:description" conpool="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="twdesc" />
          <meta name="twitter:image" conpool="https://puffers.cashimages/puffers-bch.gif" key="twimage" />
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
          <div className="flex auth my-8 font-bold  connect-btn  justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
                :
                <button onClick={signOut} className="montserratinline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>
            }
          </div>
        </div>

        <div className="w-4/5">

          <div className="flex flex-col items-center">

            <span className=" Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">PUFFERS IN <span className="text-blau">  ENTIRE COLLECTION</span></span>

          </div>
          <div className="text-center">
            
            {!signedIn ?
                // wallet not connected or fails to connect

                <h3 className="text-2xl text-white py-6">🤔 No puffers found. <a href="/mint" className="underline text-blau">Go catch some</a>, and make sure you're connected to the right wallet.</h3>

                :
                
                // signedIn state
                <CollectionCard pufferContract={pufferContract} walletAddress={walletAddress}/>
                
                // <img src="images/loader.gif" alt="loader"/>
              // end signedIn check
            }

          </div>

          <div className="mt5 py-6 w-4/4 text-center mt-6">
            <div><p className="mt-5">Contract: <span className="text-blau">0x88fA0495d5E9C1B178EAc1D76DF9D729e39fD8E8</span></p></div>

            {/* Link to the full collection on a NFT marketplace like Opensea */}
            {/* <a href="#" className="Poppitandfinchsans text-4xl border-6 bg-black  text-white hover:text-blau p-2 ">VIEW ENTIRE COLLECTION!</a> */}

          </div>

        </div>
      </div>
  )
}
