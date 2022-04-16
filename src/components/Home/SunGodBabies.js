import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mySunGodBabies from "../../Assets/Projects/sunGodBabies.png";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
              Sun God Babies is an annual campus-wide scavenger hunt! Hundreds of Sun God Babies are hidden throughout campus for students to find. Learn more to collect them all.
            </p>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                as={Link}
                to="/sgfbabies"
                style={{ maxWidth: "250px" }}
              >
                &nbsp;<b>Find Sun God Babies </b>
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
