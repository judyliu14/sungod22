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
                  Sun God Babies is an annual campus-wide scavenger hunt that coincides with the Sun God Festival! Hundreds of Sun God inspired cutouts are hidden all over campus for students to find leading up to Sun God Festival. Once found, they can be exchanged for amazing and exclusive Sun God Festival merchandise and discounts with Triton Outfitters!<br />
                  <br />
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
                        <h1>
                            Sun God Babies Instructions
                        </h1>
                        Find Sun God Babies hidden around campus.
                        <br />
                        Follow
                          <a href="https://asce.ucsd.edu/" target="_blank" alt="UCSD ASCE">@ucsdasce</a>, 
                          <a href="https://to.ucsd.edu/" target="_blank" alt="UCSD ASCE">@tritonoutfitters</a>, and 
                          <a href="https://asgraphicstudio.ucsd.edu/" target="_blank" alt="UCSD ASCE"> @asgraphicstudio </a> 
                        for clues and updates.
                        
                        <br />
                        <br />
                        <br />

                        <h1 style={{ fontSize: "1.6em" }}>
                          Redeem your Sun God Babies week 5 at Triton Outfitters for the following prizes:
                        </h1>
                          <br />
                          <b># of Babies</b>
                          <br />
                          <b>1</b> 5% off Sun God Festival Merchandise at Triton Outfitters
                          <br />
                          <b>3</b> Limited Edition SGF22 sticker (Any baby)
                            (Available for pick up at Sun God Festival TO Experience)
                          <br />
                          <b>5</b> 10% off Sun God Festival Merchandise at <br />
                            Triton Outfitters (Any baby)
                          <br />
                          <b>7</b> Your choice from the SGF22 Prize Bin <br />
                            (Collect all seven) <br />
                            Your choice of one: SGF22 Tote Bag, Sunny Days Totes, Sunny Days Shirts, Fluffy, and more.

                          <br />
                          <br />
                          <br />

                          <h1 style={{ fontSize: "1.6em" }}>
                            Triton Outfitters Week 5 Hours of Operation
                          </h1>
                          Tu: 10 am - 2:30 pm @ PC Plaza<br />
                          Wed: 10 am - 1 pm @ PC Plaza<br />
                          Th: 10 am - 2:30 pm @ PC Plaza<br />
                          Sat: 12 - 6 pm @ Sun God Festival TO Experience Tent<br />
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
