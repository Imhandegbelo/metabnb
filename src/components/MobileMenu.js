import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";
import { NavLink } from "react-router-dom";
import "./MobilMenu.css";
import { ConnectWalletModal } from "./connect-wallet/connect-wallet";

export const MobileMenu = NiceModal.create(function MobileMenu() {
  const modal = useModal();

  return (
    <Drawer
      placement="left"
      open={modal.visible}
      onClose={modal.hide}
      width={null}
      maskMotion={{
        motionAppear: true,
        motionName: "mask-motion",
      }}
      motion={{
        motionAppear: true,
        motionName: "panel-motion-left",
      }}
    >
      <div className="mobile-menu">
        <div className="container">
          <div className="d-grid" style={{ "--gap": "65px" }}>
            <div className="d-grid" style={{ "--gap": "36px" }}>
              <NavLink
                onClick={modal.hide}
                className="header__nav-link"
                to="/metabnb"
              >
                Home
              </NavLink>
              <NavLink
                onClick={modal.hide}
                className="header__nav-link"
                to="/metabnb/place-to-stay"
              >
                Place to stay
              </NavLink>
              <a onClick={modal.hide} className="header__nav-link" href="#NFTs">
                NFTs
              </a>
              <a
                onClick={modal.hide}
                className="header__nav-link"
                href="#Community"
              >
                Community
              </a>
            </div>

            <div>
              <button
                className="mybtn"
                onClick={() => {
                  NiceModal.show(ConnectWalletModal);
                  modal.hide();
                }}
              >
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
});
