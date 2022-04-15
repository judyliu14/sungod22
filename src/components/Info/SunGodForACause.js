import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import AAAImg from "../../Assets/Logos/AAA_logo.png"; 
import HHImg from "../../Assets/Logos/HH_logo.png"; 
import BTOImg from "../../Assets/Logos/BTO_logo.png";

function SunGodForACause() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Particle />
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
                <h1>
                    <span className="purple"> Sun God For A Cause </span>
                </h1>
                <p className="home-about-body">
                    Every year, ASCE presents a new Sun God For a Cause philanthropy initiative to give back to our local San Diego community. It uses our platform to raise awareness and bring attention to a cause. This year, ASCE will be working with Break the Outbreak, Healing Hands, and Asian American Advocacy to donate health kits that include PPE and hygienic products to a shelter in San Diego. 
                </p>

                <p className="home-about-body">
                    How can I participate in Sun God For A Cause?  <br />
                    This year’s Sun God For A Cause will be divided into two parts:  <br />
                    <ol>
                        <li>a donation drive where students can donate health-related items listed below and </li>
                        <li>a health kit building session where students can assemble the health kits with our partners, Healing Hands and Asian American Advocacy!</li>
                    </ol>
                </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                    Donations
                </h1>
                <p className="home-about-body">
                    Drop Off Dates/Times and Locations
                    <ul>
                        <li>Drop off your donations during ASCE tabling on Monday 4/4 and Friday 4/8 of Week 2 from 11 AM - 2 PM at Library Walk. Tune into our instagram page for more information.</li>
                    </ul>
                    What can students donate?
                    <ul>
                        <li>Toothbrush</li>
                        <li>Toothpaste </li>
                        <li>Floss </li>
                        <li>Nail clippers </li>
                        <li>Water bottle  </li>
                        <li>Comb </li>
                        <li>Mouthwash </li>
                        <li>disposable mask</li>
                        <li>hand sanitizer</li>
                        <li>*All items must be new and sealed in original packaging</li>
                    </ul>
                </p>
            </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                    Health Kit Building Session
                </h1>
                <p className="home-about-body">
                    Date, Time, and Locations
                    <ul>
                        <li>Monday, 4/11 from 11 AM - 2 PM on Library Walk </li>
                        <li>Thursday, 4/14 from 11 AM - 2 PM on Library Walk</li>  
                    </ul>
                    Sign up to build your own health kit here!
                    <br />
                    <br />
                    <Row style={{ justifyContent: "center", position: "relative" }}>
                        <Button
                            variant="primary"
                            href="https://bit.ly/SG4ACsignup"
                            target="_blank"
                            style={{ maxWidth: "250px" }}
                        >
                            &nbsp;<b>Sign Up</b>
                        </Button>
                    </Row>
                </p>
            </Col>
          </Row>

          <Row>
            <Col className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                    Thank you to our partners!
                </h1>
                <br />
                <br />
                <Row>
                    <Col md={4}>
                        <h3>Asian American Advocacy</h3>
                        <img src={AAAImg} className="img-fluid" alt="avatar" />
                        <p className="home-about-body">
                            Asian Americans Advocacy at UCSD aims to provide education and promote awareness for Asian Americans and strive to help others understand and recognize advancements and areas for growth within the Asian American community. Our priority is to provide community resources and volunteer opportunities to support impacted communities such as the elderly and youth.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h3>Break the Outbreak</h3>
                        <img src={BTOImg} className="img-fluid" alt="avatar" />
                        <p className="home-about-body">
                            Break the Outbreak™ is a 501c(3) nonprofit organization that works to provide relief and services to impacted members of the community. It has staff and members located in 53 cities and 18 states across the nation to break the outbreak of today and shatter the limitations for a better tomorrow, bringing the youth together to serve underprivileged populations. Our chapters work to combat the spread of COVID-19, provide supplies to homelessness populations, donate baby items to struggling mothers and raise awareness on medical education.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h3>Healing Hands</h3>
                        <img src={HHImg} className="img-fluid" alt="avatar" />
                        <p className="home-about-body">
                            Org description: Healing Hands at UCSD aims to improve the access to healthcare in the homeless and underserved communities and to provide students opportunities with hands-on medical related events around San Diego; to inspire and help teach the medically underserved how to advocate for mental health and medical services. The ultimate goal is to create an environment of learning and awareness in our members in order to build a bridge of understanding and assistance towards the homeless and at-risk population.
                        </p>
                    </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default SunGodForACause;
