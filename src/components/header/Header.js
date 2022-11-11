import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Home from '../../pages/Home'
import Button from '../Button'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="MetaBnb" />
        <Link to={Home}>Home</Link>
        <Link>Place to Stay</Link>
        <Link>NFTs</Link>
        <Link>Community</Link>
        <Button/>
      </div>
    );
  }
}

export default Header;
