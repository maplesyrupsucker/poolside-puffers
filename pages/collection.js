import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Navigation from '../components/navigation'

import {ADDRESS, ABI} from "../config.js"
import CollectionCard from "../components/CollectionCard.js";

export default function Pool() {
  const [sortBy, setSortBy] = useState('');

  function sortCollectionBy(e){
    setSortBy(e.target.value)
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

        <Navigation />

        <div className="w-4/5">

          <div className="flex flex-col items-center">

            <span className=" Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">PUFFERS IN <span className="text-blau">  ENTIRE COLLECTION</span></span>

          </div>
          <div className=" py-6 w-4/4 text-center">
            <div><p>Contract: <span className="text-blau">0x88fA0495d5E9C1B178EAc1D76DF9D729e39fD8E8</span></p></div>

          </div>
          <div className="text-center py-6">
            <div className="row text-center text-black" style={{marginRight:'4%'}}>
              Sort By: 
              <select className="text-black" onChange={sortCollectionBy}>
                <option className="text-black" value="name">Name</option>
                <option className="text-black" value="diamond">Diamond</option>
              </select>
            </div>
            {
                <CollectionCard sortBy={sortBy} />
            }
          </div>

          

        </div>
      </div>
  )
}

