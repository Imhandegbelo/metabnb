import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import PlaceToStay from "../../pages/PlaceToStay";
import "./Header.css";
// import Button from '../Button'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <a href="/"><img src={logo} alt="MetaBnb" className="logo"/></a>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/place-to-stay">Place to Stay</Link>
          <Link>NFTs</Link>
          <Link>Community</Link>
        </div>
        <div className="pt-5">
          <a href="/connect-wallet"><button className="btn">Connect wallet</button></a>
        </div>
      </div>
    );
  }
}

export default Header;
