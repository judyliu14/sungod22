import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mySign from "../../Assets/Projects/sign.png";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import Merch from './Merch'

const registerLink = "https://ucsd.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=SGF&linkID=ucsd-arts&shopperContext=&caller=&appCode="

function Registration() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              REGISTRATION
            </h1>
            <p className="home-about-body">
              Registration for the 2022 Sun God Festival is now <strong>CLOSED.</strong>
              <br />
              <br />All attendees must have completed registration by
              <b> Noon on Friday, April 22nd </b>
              AND be compliant with the COVID-19 Vaccine Mandate by
              <b> Noon on Wednesday, April 27th </b>
               - no exceptions will be made.
              <br />
              <br />
            </p>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={registerLink}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                &nbsp;<b>Register</b>
              </Button>
            </Row>
          </Col>
          
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={mySign} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Merch />
    </Container>
  );
}
export default Registration;
