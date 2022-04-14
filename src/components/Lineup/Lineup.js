import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Artists from "./Artists";

function Lineup() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Row>
        <Col className="home-about-description">
          <h1 className="project-heading">
            Lineup <strong className="purple">2022 </strong>
          </h1>
        </Col>
      </Row>
      <Artists />
    </Container>
  );
}

export default Lineup;
