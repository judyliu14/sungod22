import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ASlogo from "../../Assets/Logos/SGF22_AS.png"
import ASGSlogo from "../../Assets/Logos/SGF22_ASGS.png"
import Thurgoodlogo from "../../Assets/Logos/SGF22_ThurgoodVibes.png"
import TOlogo from "../../Assets/Logos/SGF22_TO.png"
import Tilt from "react-parallax-tilt";

function Sponsors() {
  return (

    <Container fluid className="home-about-section" id="about">
      <Row>
        <Col className="home-about-description">
          <h1>
            Sponsors <strong >2022 </strong>
          </h1>
        </Col>
        <Row className="sponsor-logos">
            <Col md={3} className="home-about-description">
                <Tilt>
                  <img src={Thurgoodlogo} className="img-fluid" alt="avatar" />
                </Tilt>
            </Col>
            <Col md={3} className="home-about-description">
                <Tilt>
                  <a
                    href="https://asce.ucsd.edu/"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={ASlogo} className="img-fluid" alt="avatar" />
                  </a>
                </Tilt>
            </Col>
            <Col md={3} className="home-about-description">
                <Tilt>
                  <a
                    href="https://asgraphicstudio.ucsd.edu/"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={ASGSlogo} className="img-fluid" alt="avatar" />
                  </a>
                </Tilt>
            </Col>
            <Col md={3} className="home-about-description">
                <Tilt>
                  <a
                    href="https://to.ucsd.edu/"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={TOlogo} className="img-fluid" alt="avatar" />
                  </a>
                </Tilt>
            </Col>
          </Row>
        </Row>
        <Particle />
    </Container>
  );
}

export default Sponsors;
