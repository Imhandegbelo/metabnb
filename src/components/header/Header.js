import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import hamburger from "../../assets/img/hamburger.svg";
import { ConnectWalletModal } from "../connect-wallet/connect-wallet";
import NiceModal from "@ebay/nice-modal-react";
import { MobileMenu } from "../MobileMenu";

class Header extends React.Component {
  render() {
    return (
      <div className="header md-1-margin">
        <div>
          <a href="/metabnb">
            <img src={logo} alt="MetaBnb" className="logo" />
          </a>
        </div>
        <div className="links md-d-none lg-d-flex">
          <Link to="/metabnb">Home</Link>
          <Link to="/metabnb/place-to-stay">Place to Stay</Link>
          <Link>NFTs</Link>
          <Link>Community</Link>
        </div>
        <div className="">
          <button
            className="mybtn md-d-none lg-d-flex"
            onClick={() => NiceModal.show(ConnectWalletModal)}
          >
            Connect wallet
          </button>

          <button
            onClick={() => NiceModal.show(MobileMenu)}
            className="lg-d-none no-border no-bg"
          >
            <img src={hamburger} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
