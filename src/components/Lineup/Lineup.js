import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Artists from "./Artists";

function Lineup() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Row>
        <Col className="home-about-description">
          <h1 className="project-heading">
            Lineup <strong className="purple">2022 </strong>
          </h1>
          <br />
          <br />
          <h3 className="project-heading">
            Coming Soon!
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Lineup;
