import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Sponsors() {
  return (

    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Row>
        <Col className="home-about-description">
          <h1>
            Sponsors <strong className="purple">2022 </strong>
          </h1>
          <h2>
            <br />ASGS
            <br />TO
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Sponsors;
