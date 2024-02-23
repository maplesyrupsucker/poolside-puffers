export default function Navigation() {

  return (
  <div >
    <div className="flex items-center justify-between w-full border-b-2">
      <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
        <a href="/" className="text-4xl text-white hover:text-black m-3">Home</a>
        <a href="/bridge" className="text-4xl hover:text-black m-3 text-black">Bridge!</a>
        <a href="/your-pool" className="text-4xl text-white hover:text-black m-3">Your Pool</a>
        <a href="/collection" className="text-4xl text-white hover:text-black m-3">Collection</a>
        {/* <a href="https://twitter.com/poolsidepuffers" className="text-4xl text-white hover:text-black m-3">TWITTER</a> */}
        <a href="/rarity" className="text-4xl text-white hover:text-black m-3">Rarity</a>
        <a href="https://t.me/poolsidepuffers" className="text-4xl text-white hover:text-black m-3">TELEGRAM</a>
      </nav>
    </div>
  </div>
  )
}