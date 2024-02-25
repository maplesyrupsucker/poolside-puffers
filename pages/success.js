import Head from 'next/head'
import Navigation from '../components/navigation'
import { useRouter } from 'next/router'

export default function Success() {
  const router = useRouter()
  const {orderid} = router.query
  console.log(orderid)

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
          </div>
        </div>
      </div>
  </div>)
}