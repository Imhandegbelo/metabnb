import React from "react";
import "./PlaceToStay.css";
import Pic1 from "../assets/img/Frame1.png";
import Pic2 from "../assets/img/Frame2.png";
import Pic3 from "../assets/img/Frame3.png";
import Pic4 from "../assets/img/Frame4.png";
import Pic5 from "../assets/img/Frame5.png";
import Pic6 from "../assets/img/Frame6.png";
import Pic7 from "../assets/img/Frame7.png";
import Pic8 from "../assets/img/Frame8.png";
import Pic9 from "../assets/img/Frame9.png";
import Pic10 from "../assets/img/Frame10.png";
import Pic11 from "../assets/img/Frame11.png";
import Pic12 from "../assets/img/Frame12.png";
import Pic13 from "../assets/img/Frame13.png";
import Pic14 from "../assets/img/Frame14.png";
import Pic15 from "../assets/img/Frame15.png";
import Pic16 from "../assets/img/Frame16.png";
import filter from "../assets/img/filter.png";
import star from "../assets/img/Star.png";

class PlaceToStay extends React.Component {
  render() {
    const place_to_stay = [
      Pic5,
      Pic6,
      Pic7,
      Pic8,
      Pic1,
      Pic2,
      Pic3,
      Pic4,
      Pic9,
      Pic10,
      Pic11,
      Pic12,
      Pic13,
      Pic14,
      Pic15,
      Pic16,
    ];

    const small_nav = [
      "Restaurant",
      "Cottage",
      "Castle",
      "fantast city",
      "beach",
      "Carbins",
      "Off-grid",
      "Farm",
    ];
    return (
      <div>
        <div className="small_nav">
          <div className="link_div">
            {small_nav.map((elements) => (
              <h3>{elements}</h3>
            ))}
          </div>
          <div>
            <button className="butn">
              Location
              <span>
                <img src={filter} alt="filter" className="mybtn_icon" />
              </span>
            </button>
          </div>
        </div>

        <div className="community_section" id="community">
          <div className="community">
            {place_to_stay.map((places) => (
              <div className="community_wrapper">
                <img src={places} alt="places" />
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
      </div>
    );
  }
}

export default PlaceToStay;
