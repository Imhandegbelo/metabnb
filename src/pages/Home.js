import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import grpPhoto from '../assets/img/3-photos.png'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="learn-more-section">
          <div className="desc">
            <h1>Metabnb NFTs</h1>
            <p>
              Metabnb NFTs Discover our NFT gift cards collection. Loyal
              customers gets amazing gift cards which are traded as NFTs. These
              NFTs gives our cutomer access to loads of our exclusive services.
              Learn more
            </p>
            <button className="btn btn-secondary">Learn more</button>
          </div>
          <div className="img-container">
            <img src={grpPhoto} alt="photoGroup" className="photogroup"/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
