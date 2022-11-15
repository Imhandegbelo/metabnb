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
import star from "../assets/img/star.svg";
import { Carousel } from "react-responsive-carousel";
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
          <div className="sideImg sm-d-none md-d-none">
            <img src={grouped} alt="photogroup" className="" />
          </div>
        </div>

        <div id="NFT" className="container-fluid nft-section ">
          <div
            className="d-none xl-d-flex align-items-center"
            style={{ "--gap": "264px" }}
          >
            <img src={MBtoken} alt="" />
            <img src={Metamask} alt="" />
            <img src={OpenSea} alt="" />
          </div>

          <div className=" md-d-flex align-items-center xl-d-none justify-content-space-between max-870">
            <img src={MBtoken} alt="" />
            <img src={Metamask} alt="" />
            <img src={OpenSea} alt="" />
          </div>

          <div className="md-d-none">
            <Carousel
              autoPlay
              centerMode
              infiniteLoop
              renderIndicator={false}
              renderThumbs={() => false}
              renderArrowNext={() => false}
              renderArrowPrev={() => false}
              dynamicHeight
              showStatus={false}
              thumbWidth={null}
            >
              <img style={{ maxHeight: "37.56px" }} src={MBtoken} alt="" />
              <img style={{ maxHeight: "37.56px" }} src={Metamask} alt="" />
              <img style={{ maxHeight: "37.56px" }} src={OpenSea} alt="" />
            </Carousel>
          </div>

          {/* <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={MBtoken} alt="MBtoken" className="nft" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={Metamask} alt="Metamask" className="nft" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={OpenSea} alt="Opensea" className="nft" />
            </div>
          </div> */}
        </div>

        <div className="community_section" id="community">
          <h2 className="community_header">
            Inspiration for your next adventure
          </h2>
          <div className="community">
            {communities.map((community) => (
              <div className="community_wrapper">
                <img src={community} alt="community" className="place_image" />
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
          <div className="img-container sm-d-none md-d-none">
            <img
              src={grpPhoto}
              alt="photoGroup"
              className="photogroup sm-d-none"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
