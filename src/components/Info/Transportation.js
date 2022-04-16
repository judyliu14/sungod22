import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mySwing from "../../Assets/Projects/swing.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";

function Transportation() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
                <h1>
                    Transportation
                </h1>
                <p className="home-about-body">
                    Having a plan for getting to and from campus safely is part of the safe Sun God experience. Parking and transportation on campus is heavily impacted on the day of the Sun God Festival with some nearby parking lots being reserved, either partially or in full, for festival vendors and staff including: Hopkins Parking Structure, Pangea Parking Structure, P357 and Spanos Loop. 
                </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={mySwing} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                    RIDE AN MTS BUS
                </h1>
                <p className="home-about-body">
                    Route 201:
                    <ul>
                        <li>{"UTC -> UCSD -> La Jolla Village Square -> UTC"}</li>
                        <li>{"Arrives/Departs UCSD approx. every 15 minutes"}</li>
                    </ul>
                    Route 202:
                    <ul>
                        <li>{"UTC -> La Jolla Village Square -> UCSD -> UTC"}</li>
                        <li>{"Arrives/Departs UCSD approx. every 15 minutes"}</li>
                    </ul>
                    Route 921A West:
                    <ul>
                        <li>{"Mira Mesa -> Sorrento Valley -> La Jolla Village Dr & Genesee -> UCSD"}</li>
                        <li>{"Arrives/Departs UCSD approx. hourly"}</li>
                    </ul>
                    Route 921A East:
                    <ul>
                        <li>{"UCSD -> La Jolla Village Dr & Genesee -> Sorrento Valley -> Mira Mesa"}</li>
                        <li>{"Arrives/Departs UCSD approx. hourly"}</li>
                    </ul>
                    Visit SDMTS.com for more information about MTS bus service.
                </p>
            </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                    UC San Diego Blue Line Trolley Extension
                </h1>
                <p className="home-about-body">
                    The Trolley’s UC San Diego Blue Line will go from the border with Mexico, through downtown and all the way to UTC. 
                    <br />
                    <br />
                    Visit SDMTS.com for more information about Blue Line Trolley System. 
                </p>
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </section>
  );
}
export default Transportation;
