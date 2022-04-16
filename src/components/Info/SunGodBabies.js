import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mySunGodBabies from "../../Assets/Projects/sunGodBabies.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";

function SunGodBabies() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
                <h1>
                    Sun God Babies
                </h1>
                <p className="home-about-body">
                  Sun God Babies is an annual campus-wide scavenger hunt that coincides with the Sun God Festival! Hundreds of Sun God inspired cutouts are hidden all over campus for students to find leading up to Sun God Festival. Once found, they can be exchanged for amazing and exclusive Sun God Festival merchandise and discounts with Triton Outfitters!
                  <br />
                  <br />
                  {"Follow "} 
                  <a href="https://asce.ucsd.edu/" target="_blank" alt="UCSD ASCE">@ucsdasce</a>, 
                  <a href="https://to.ucsd.edu/" target="_blank" alt="UCSD ASCE">@tritonoutfitters</a>, and 
                  <a href="https://asgraphicstudio.ucsd.edu/" target="_blank" alt="UCSD ASCE"> @asgraphicstudio </a> 
                  for clues and updates.
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
        <Particle />
      </Container>
    </section>
  );
}
export default SunGodBabies;
