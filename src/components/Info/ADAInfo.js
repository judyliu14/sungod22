import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Transportation() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Particle />
        <Container>
          <Row>
            <Col className="home-about-description">
                <h1>
                    <span className="purple"> ADA Info </span>
                </h1>
                <p className="home-about-body">
                    The Sun God Festival is an accessible event for guests with disabilities. It is our mission to provide the best experience for all event attendees. Please feel free to contact us if you have any questions not answered below.
                </p>
            </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                    Parking
                </h1>
                <p className="home-about-body">
                    For your convenience ADA parking will be available in 2 convenient locations for the Sun God Festival:
                    <ul>
                        <li>Lot 304 (OceanView Terrace)</li>
                        <li>Hopkins Parking Structure</li>
                    </ul>
                    Please see the UCSD Campus Map for the specific locations of these parking lots.
                </p>
            </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                    Entry
                </h1>
                <p className="home-about-body">
                    The festival entrance is accessible for patrons with disabilities. If you need assistance, please call our ADA Guest Services Liaison at (858) 864-8242 upon arrival at any of our ADA parking locations or at the event entrance.
                </p>
            </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                    Service Animals
                </h1>
                <p className="home-about-body">
                    Service animals specifically trained to assist a person with a disability are welcome.  No other animals, including pets, therapy animals, or emotional support animals, are allowed.
                </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Transportation;
