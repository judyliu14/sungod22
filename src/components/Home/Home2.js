import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> REGISTER HERE </span>
            </h1>
            <p className="home-about-body">
              Registration is now OPEN!
              <br />
              <br />All UCSD Undergrads must register to attend the festival.
              <i>
                <b className="purple"> Registration closes on April 27th at 11:59PM! </b>
              </i>
              <br />
              <br />
              UC San Diego Graduate students are eligible to attend the 2022 Sun God Festival!
              
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
