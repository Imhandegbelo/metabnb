import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import footerLogo from "../../assets/img/Groupfooter-icon.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    const places = ["Castle", "Farm", "Beach", "Learn more"];
    const community = ["NFT", "Tokens", "Landlord", "Discord"];
    const about__us = ["Road map", "Creators", "Career", "Contact us"];

    return (
      <div className="footer">
        <Container>
          <Row>
            <Col xl={4} lg={4} md={4} sm={12}>
              <div>
                <img src={footerLogo} alt="footerLogo" />
              </div>
              <div>
                <img src={facebook} alt="facebook" className="social" />
                <img src={instagram} alt="instagram" className="social" />
                <img src={twitter} alt="twitter" className="social" />
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12}>
              <Container>
                <Row>
                  <Col xl={4} lg={4} md={4} sm={12}>
                    <h5 className="text-white">Community</h5>
                    <Container fluid className="pl-10">
                      {community.map((comms) => (
                        <h6>{comms}</h6>
                      ))}
                    </Container>
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={12}>
                    <h5 className="text-white">Places</h5>
                    <Container fluid className="pl-10">
                      {places.map((place) => (
                        <h6>{place}</h6>
                      ))}
                    </Container>
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={12}>
                    <h5 className="text-white">About us</h5>
                    <Container fluid className="pl-10">
                      {about__us.map((links) => (
                        <h6>{links}</h6>
                      ))}
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <p>&copy; 2022 Metabnb</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
