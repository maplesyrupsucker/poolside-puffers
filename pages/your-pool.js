import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"
import PufferCard from "../components/PufferCard";
import Navigation from '../components/navigation'

export default function Pool() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  const [myTokenId, setMyTokenId] = useState(null)

  const [pufferContract, setPufferContract] = useState(null)

  const [pufferPrice, setPufferPrice] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleStarted, setSaleStarted] = useState(false)
  const [sortBy, setSortBy] = useState('');

  function sortCollectionBy(e){
    setSortBy(e.target.value)
  }

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

      console.log("estimated gas",gasAmount)

    } else {
      console.log("Wallet not connected")
    }
  }

  return (
      <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Your Pool - Poolside Puffers</title>
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

        <Navigation />
      
        <div className="flex auth my-8 font-bold  connect-btn  justify-center items-center vw2">
          {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            : <button onClick={signOut} className="montserratinline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress.slice(0,20) + "..."}</button>
          }
        </div>

        <div className="w-4/5">

          <div className="flex flex-col items-center">

            <span className=" Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">PUFFERS IN <span className="text-blau">  YOUR POOL</span></span>

          </div>
          <div className="text-center">
            
            {!signedIn ?
                // wallet not connected or fails to connect

                <h3 className="text-2xl text-white py-6">🤔 No puffers found. <a href="/mint" className="underline text-blau">Go catch some</a>, and make sure you're connected to the right wallet.</h3>

                :
                
                // signedIn state
                <div className="text-center">
                <div className="row text-center text-black" style={{marginRight:'4%'}}>
                  Sort By: 
                  <select className="text-black" onChange={sortCollectionBy}>
                    <option className="text-black" value="name">Name</option>
                    <option className="text-black" value="diamond">Diamond</option>
                  </select>
                </div>
                <PufferCard pufferContract={pufferContract} walletAddress={walletAddress} sortBy={sortBy} />
                </div>
                
                // <img src="images/loader.gif" alt="loader"/>
              // end signedIn check
            }

          </div>

          <div className="mt5 py-6 w-4/4 text-center mt-6">
            <small>Not seeing your minted puffers? Make sure you're connected to the right wallet and refresh the page.</small>

            <div className="py-6 w-4/4 text-center">
              <div><p>CashTokens TokenId: <a className="text-blau" target='_blank' href='https://explorer.salemkode.com/token/8ded0441eab6fdb69560b396594861eb38b515bf98353e2b4d7ebdf388ebbec2' style={{wordBreak: 'break-all'}}>
              8ded0441eab6fdb69560b396594861eb38b515bf98353e2b4d7ebdf388ebbec2</a></p>
              </div>
              <div><p>SmartBCH Contract: <span className="text-blau" style={{wordBreak: 'break-all'}}>0x88fA0495d5E9C1B178EAc1D76DF9D729e39fD8E8</span></p></div>
            </div>

            {/* Link to the full collection on a NFT marketplace like Opensea */}
            {/* <a href="#" className="Poppitandfinchsans text-4xl border-6 bg-black  text-white hover:text-blau p-2 ">VIEW ENTIRE COLLECTION!</a> */}

          </div>

        </div>
      </div>
  )
}
