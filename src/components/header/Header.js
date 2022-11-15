import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
// import WalletModal from "../WalletModal";

class Header extends React.Component {
  render() {
    // const [modalShow, setModalShow] = useState(false);
    const handleClick = (e)=>{
      console.log("Button clicked")
    }

    return (
      <div className="header">
        <div>
          <a href="/metabnb">
            <img src={logo} alt="MetaBnb" className="logo" />
          </a>
        </div>
        <div className="links">
          <Link to="/metabnb">Home</Link>
          <Link to="/metabnb/place-to-stay">Place to Stay</Link>
          <Link>NFTs</Link>
          <Link>Community</Link>
        </div>
        <div className="">
          <button className="mybtn" onClick={handleClick}>
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
