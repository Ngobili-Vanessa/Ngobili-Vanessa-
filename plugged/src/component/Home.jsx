function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="banner-text">
          <h1 className="headline">POWERING YOUR DIGITAL LIFESTYLE</h1>
          <p className="desc">Shop latest gadgets, accessories and tech essentials</p>
          <button className="shopnow">Shop now</button>
          <button className="explorenow">Explore now</button>
        </div>
        <img src="/1000032465-removebg-preview.png" alt="banner" className="banner" />
      </div>

      <div className="feat-pro">
        <h1 className="pro">FEATURED PRODUCTS</h1>
        <div className="products">
          <div className="wireless-earbud-section">
            <img className="earbuds" src="/images-featured/b74469f61562f7379f3e6c4dfcf159b2.jpg" alt="" />
            <h2 className="wireless">WIRELESS EARBUDS</h2>
          </div>
          <div className="bluetooth-speaker-section">
            <img className="speaker" src="/images-featured/85c85731c377ebd68ef160a6960f653d.jpg" alt="" />
            <h2 className="bluetooth">BLUETOOTH SPEAKER</h2>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home;