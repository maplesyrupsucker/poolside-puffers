import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"
import PufferCard from "../components/PufferCard";
import Navigation from '../components/navigation'

export default function Pool() {
  const [signedIn, setSignedIn] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)
  const [pufferContract, setPufferContract] = useState(null)
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  function sortCollectionBy(e){
    setSortBy(e.target.value)
  }

  useEffect(() => {
    checkWalletConnection()
  }, [])

  async function checkWalletConnection() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        
        if (accounts.length > 0) {
          const network = await web3.eth.net.getNetworkType()
          if (network !== "private") {
            setError(`Please switch to smartBCH network. Currently on ${network}`)
            return
          }

          const pufferContract = new web3.eth.Contract(ABI, ADDRESS)
          setWalletAddress(accounts[0])
          setPufferContract(pufferContract)
          setSignedIn(true)
        }
      } else {
        setError("No Web3 wallet detected. Please install MetaMask")
      }
      setLoading(false)
    } catch (err) {
      console.error(err)
      setError("Error connecting to wallet")
      setLoading(false)
    }
  }

  async function connectWallet() {
    try {
      setLoading(true)
      setError(null)
      
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        await checkWalletConnection()
      } else {
        setError("No Web3 wallet detected. Please install MetaMask")
      }
    } catch (err) {
      console.error(err)
      setError("Error connecting wallet")
      setLoading(false)
    }
  }

  async function disconnectWallet() {
    setSignedIn(false)
    setWalletAddress(null)
    setPufferContract(null)
  }

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Your Pool - Poolside Puffers</title>
        <link rel="icon" href="/images/favicon.png" />

        <meta property="og:title" content="Poolside Puffers" key="ogtitle" />
        <meta property="og:description" content="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://puffers.cash" key="ogurl"/>
        <meta property="og:image" content="https://puffers.cash/images/puffers-bch.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://puffers.cash" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="puffers.cash" key="twdomain" />
        <meta property="twitter:url" content="https://puffers.cash" key="twurl" />
        <meta name="twitter:title" content="Poolside Puffers" key="twtitle" />
        <meta name="twitter:description" content="Poolside Puffers is a community-centered art project to introduce the Bitcoin Cash community to smartBCH NFT's. Poolside Puffers are ready to catch!" key="twdesc" />
        <meta name="twitter:image" content="https://puffers.cash/images/puffers-bch.gif" key="twimage" />
      </Head>

      <Navigation />
    
      <div className="flex auth my-8 font-bold connect-btn justify-center items-center vw2">
        {!signedIn ? (
          <button onClick={connectWallet} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">
            Connect Wallet with MetaMask
          </button>
        ) : (
          <button onClick={disconnectWallet} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">
            Wallet Connected: {walletAddress?.slice(0,20)}...
          </button>
        )}
      </div>

      <div className="w-4/5">
        <div className="flex flex-col items-center">
          <span className="Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4">
            PUFFERS IN <span className="text-blau">YOUR POOL</span>
          </span>
        </div>

        <div className="text-center">
          {loading ? (
            <div className="text-2xl text-white py-6">Loading...</div>
          ) : error ? (
            <div className="text-2xl text-red-500 py-6">{error}</div>
          ) : !signedIn ? (
            <h3 className="text-2xl text-white py-6">
              Please connect your wallet to view your Puffers. New to Puffers? <a href="/mint" className="underline text-blau">Catch some here!</a>
            </h3>
          ) : (
            <div className="text-center">
              <div className="row text-center text-black" style={{marginRight:'4%'}}>
                Sort By: 
                <select className="text-black" onChange={sortCollectionBy}>
                  <option value="name">Name</option>
                  <option value="diamond">Diamond</option>
                </select>
              </div>
              <PufferCard 
                pufferContract={pufferContract} 
                walletAddress={walletAddress} 
                sortBy={sortBy}
              />
            </div>
          )}
        </div>

        <div className="mt5 py-6 w-4/4 text-center mt-6">
          <small>Not seeing your minted puffers? Make sure you're connected to the right wallet and refresh the page.</small>

          <div className="py-6 w-4/4 text-center">
            <div>
              <p>CashTokens TokenId: <a className="text-blau" target='_blank' href='https://explorer.salemkode.com/token/8ded0441eab6fdb69560b396594861eb38b515bf98353e2b4d7ebdf388ebbec2' style={{wordBreak: 'break-all'}}>
                8ded0441eab6fdb69560b396594861eb38b515bf98353e2b4d7ebdf388ebbec2
              </a></p>
            </div>
            <div>
              <p>SmartBCH Contract: <span className="text-blau" style={{wordBreak: 'break-all'}}>
                0x88fA0495d5E9C1B178EAc1D76DF9D729e39fD8E8
              </span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
