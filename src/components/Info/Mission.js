import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
import Tilt from "react-parallax-tilt";
import Vision from "./Vision";

function Mission(props) {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
            <Col md={8} className="home-about-description">
              <h1>
                Mission
              </h1>
              <p className="home-about-body">
                To curate an annual music and arts festival that is the highlight of the UC San Diego undergraduate student experience.  
                We strive to build a sense of community through gathering our campus together to engage in our shared tradition.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Vision />
    </section>
  );
}
export default Mission;
