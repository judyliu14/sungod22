import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mySunGodBabies from "../../Assets/Projects/sunGodBabies.png";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// const babiesLink = "https://to.ucsd.edu/collections/sun-god-festival-2022"

function SunGodBabies() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              Sun God Babies
            </h1>
            <p className="home-about-body">
            Come to the biggest event of the year in style by rocking some sweet festival merch! 
            This year, Triton Outfitters has anything from running shorts, to band-inspired t-shirt, 
            to chic bandanas.
            </p>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                as={Link}
                to="/sun-god-babies"
                style={{ maxWidth: "250px" }}
              >
                &nbsp;<b>Get Sun God Babies </b>
              </Button>
            </Row>
          </Col>
          
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={mySunGodBabies} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default SunGodBabies;