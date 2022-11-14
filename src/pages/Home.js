import React from "react";
import grpPhoto from "../assets/img/photo3.png";
import MBtoken from "../assets/img/MBToken.png";
import Metamask from "../assets/img/MetaMask.png";
import OpenSea from "../assets/img/OpenSea.png";
import grouped from "../assets/img/grouped.png";
import Frame1 from "../assets/img/Frame1.png";
import Frame2 from "../assets/img/Frame2.png";
import Frame3 from "../assets/img/Frame3.png";
import Frame4 from "../assets/img/Frame4.png";
import Frame5 from "../assets/img/Frame5.png";
import Frame6 from "../assets/img/Frame6.png";
import Frame7 from "../assets/img/Frame7.png";
import Frame8 from "../assets/img/Frame8.png";
import star from "../assets/img/Star.png";
import "./Home.css";

class Home extends React.Component {
  render() {
    const communities = [
      Frame1,
      Frame2,
      Frame3,
      Frame4,
      Frame5,
      Frame6,
      Frame7,
      Frame8,
    ];
    return (
      <div>
        <div className="welcome-section">
          <div>
            <p className="big-text">
              Rent a <span>Place</span> away from <span>Home</span> in the{" "}
              <span>Metaverse</span>
            </p>
            <p className="small-text">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div>
              <input type="text" placeholder="Search for location" />
              <button className="search-btn">Search</button>
            </div>
          </div>
          <div className="sideImg">
            <img src={grouped} alt="photogroup" />
          </div>
        </div>

        <div id="NFT" className="nft-section flex-row">
          <div>
            <img src={MBtoken} alt="MBtoken" className="nft" />
          </div>
          <div>
            <img src={Metamask} alt="Metamask" className="nft" />
          </div>
          <div>
            <img src={OpenSea} alt="Opensea" className="nft" />
          </div>
        </div>

        <div className="community_section" id="community">
          <h2 className="community_header">
            Inspiration for your next adventure
          </h2>
          <div className="community">
            {communities.map((community) => (
              <div className="community_wrapper">
                <img src={community} alt="community" />
                <div className="name-price">
                  <span>Desert King</span>
                  <b>1MBT per night</b>
                </div>
                <div className="">
                  <span>2345km away</span>
                  <b className="duration">available for 2weeks stay</b>
                </div>
                <div className="star">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="learn-more-section">
          <div className="desc">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services. Learn more
            </p>
            <button className="mybtn mybtn-secondary">Learn more</button>
          </div>
          <div className="img-container">
            <img src={grpPhoto} alt="photoGroup" className="photogroup" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
