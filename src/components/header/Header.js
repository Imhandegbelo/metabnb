import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import WalletModal from "../WalletModal";

class Header extends React.Component {
  render() {
    // const [modalShow, setModalShow] = useState(false);
    

    return (
      <div className="header">
        <div>
          <a href="/">
            <img src={logo} alt="MetaBnb" className="logo" />
          </a>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/place-to-stay">Place to Stay</Link>
          <Link>NFTs</Link>
          <Link>Community</Link>
        </div>
        <div className="">
          <button className="mybtn">
            Connect wallet
          </button>
          {/* <Button className="btn btn-primary">Connect wallet</Button> */}
        </div>
        {/* <WalletModal show={modalShow} onHide={() => setModalShow(false)} />; */}
      </div>
    );
  }
}

export default Header;
