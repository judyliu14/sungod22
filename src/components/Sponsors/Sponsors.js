import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Sponsors() {
  return (

    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Row>
        <Col className="home-about-description">
          <h1 className="project-heading">
            Sponsors <strong className="purple">2022 </strong>
          </h1>
          <h2>
            <br />ASGS
            <br />TO
          </h2>
        </Col>
      </Row>
    </Container>

  //   <Container fluid className="lineup-section">
  //   <Particle />
  //   <Container>
  //     <h1 className="project-heading">
  //       Sponsors <strong className="purple">2022 </strong>
  //     </h1>

  //   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  //     <Col xs={7} md={5} className="tech-icons">
  //       <CgCPlusPlus />
  //     </Col>
  //     <Col xs={7} md={5} className="tech-icons">
  //       <CgCPlusPlus />
  //     </Col>
  //     <Col xs={7} md={5} className="tech-icons">
  //       <CgCPlusPlus />
  //     </Col>
  //     <Col xs={7} md={5} className="tech-icons">
  //       <CgCPlusPlus />
  //     </Col>
  //     <Col xs={7} md={5} className="tech-icons">
  //       <CgCPlusPlus />
  //     </Col>
  //     <Col xs={7} md={5} className="tech-icons">
  //       <CgCPlusPlus />
  //     </Col>
  //   </Row>

  //   </Container>
  // </Container>
  );
}

export default Sponsors;
