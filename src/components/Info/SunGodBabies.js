import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mySunGodBabies from "../../Assets/Projects/sunGodBabies.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";

function SunGodBabies() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Particle />
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
                <h1>
                    Sun God Babies
                </h1>
                <p className="home-about-body">
                    Sun God Babies is an annual campus-wide scavenger hunt that coincides with the Sun God Festival! Hundreds of Sun God inspired cutouts are hidden all over campus for students to find throughout a three week period. Once found, they can be exchanged for amazing and exclusive Sun God merchandise and discounts with Triton Outfitters!
                </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={mySunGodBabies} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
              <Col className="home-about-description">
                      <p className="home-about-body">
                        <h1 style={{ fontSize: "1.6em" }}>
                            More info coming soon!
                        </h1>
                        <br />
                        <br />
                        <br />
                        <br />
                      </p>
              </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default SunGodBabies;
