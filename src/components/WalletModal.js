import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Dialog from "rc-dialog";
import "rc-dialog/assets/index.css";
import arrowIcon from "../../images/arrow.svg";
import closeIcon from "../../images/close-icon.svg";
import metaLogo from "../../images/meta-logo.svg";
import walletConnectLogo from "../../images/wallet-connect-logo.svg";
import { Button } from "../../components/button/button";
import "./connect-wallet.css";

export const ConnectWalletModal = NiceModal.create(
  function ConnectWalletModal() {
    const modal = useModal();

    return (
      <Dialog
        visible={modal.visible}
        wrapClassName="modal-center"
        animation="zoom"
        maskAnimation="fade"
        onClose={modal.hide}
        style={{
          maxWidth: "600px",
          width: "calc(100% - 32px)",
        }}
        closeIcon={<></>}
      >
        <div className="modal connect-wallet-modal">
          <div className="header d-flex justify-content-space-between align-items-center">
            <h4 className="modal-title">Connect Wallet</h4>

            <Button isIconButton className="close-button" onClick={modal.hide}>
              <img src={closeIcon} alt="" />
            </Button>
          </div>

          <div className="body">
            <div className="d-grid" style={{ "--gap": "16px" }}>
              <p className="title">Choose your preferred wallet:</p>

              <button className="d-flex justify-content-space-between align-items-center">
                <div
                  className="d-flex align-items-center"
                  style={{ "--gap": "16px" }}
                >
                  <img src={metaLogo} alt="" />

                  <p>Metamask</p>
                </div>

                <img src={arrowIcon} alt="" />
              </button>

              <button className="d-flex justify-content-space-between align-items-center">
                <div
                  className="d-flex align-items-center"
                  style={{ "--gap": "16px" }}
                >
                  <img src={walletConnectLogo} alt="" />

                  <p>WalletConnect</p>
                </div>

                <img src={arrowIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
);
