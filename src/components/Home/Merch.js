import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/merch.png";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import SunGodBabies from './SunGodBabies'

const merchLink = "https://to.ucsd.edu/collections/sun-god-festival-2022"

function Merch() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              Merch
            </h1>
            <p className="home-about-body">
              Come to the biggest event of the year in style by rocking some sweet festival merch! This year, Triton Outfitters has anything from official SGF22 hoodies, to t-shirts, to totes, and more.
            </p>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={merchLink}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                &nbsp;<b>Get Merch</b>
              </Button>
            </Row>
          </Col>
          
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <SunGodBabies />
    </Container>
  );
}
export default Merch;
