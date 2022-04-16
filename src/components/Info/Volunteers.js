import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";

const volunteerLink = "https://forms.gle/C3QbQKqqhsmMCBwq6"

function Volunteer() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
                <h1>
                    <span className="purple"> Volunteers </span>
                </h1>
                <p className="home-about-body">
                    We are building an incredible volunteer team to help us bring the festival to life! We are now welcoming applications for those who would like to help bring this experience to life. We will be accepting applications until April 8th, 2022. 
                </p>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                    variant="primary"
                    href={volunteerLink}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                >
                    &nbsp;<b>Sign Up</b>
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
        <Particle />
      </Container>
    </section>
  );
}
export default Volunteer;
