import React from "react";
import footerLogo from "../../assets/img/Groupfooter-icon.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="logo-social flex-col">
            <div>
              <img src={footerLogo} alt="footerLogo" />
            </div>
            <div>
              <img src={facebook} alt="facebook" className="social" />
              <img src={instagram} alt="instagram" className="social" />
              <img src={twitter} alt="twitter" className="social" />
            </div>
          </div>
          <div className="list-wrap flex-row">
            <div className="flex__1">
              <h5>Community</h5>
              <ul className="links">
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlord</li>
                <li>Discord</li>
              </ul>
            </div>
            <div className="flex__1">
              <h5>Places</h5>
              <ul className="links">
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn More</li>
              </ul>
            </div>
            <div className="flex__1">
              <h5>About us</h5>
              <ul className="links">
                <li>Road map</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copywrite">
          <p>&copy; 2022 Metabnb</p> 
        </div>
      </div>
    );
  }
}

export default Footer;
