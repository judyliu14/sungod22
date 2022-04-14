import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
import Mission from "./Mission"
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";

function About(props) {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Particle />
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> ABOUT </span>
              </h1>
              <p className="home-about-body">
              The Sun God Festival is a student-curated, daytime music and arts festival at UC San Diego. 
              Named as one of Live Nation's
                <b className="purple"> Top 5 College Concerts That Should Be Actual Festivals</b>,
                the Sun God Festival is continuously reimagined to deliver students with thrilling moments 
                and life-long memories from live performances by national touring artists, 
                diverse food vendors, vibrant art and décor, and interactive brand activations.

                <br />
                <br />2022 marks the 38th annual Sun God Festival. 
                The tradition began in 1983 when AS President Henry Chu, 
                came up with the idea for a big bash after visiting UCLA’s spring festival. 
                Although the first effort was unseasonably washed out and was canceled due to rain, 
                Sun God shined in its 1984 re-debut and the festival has since become a beloved UC San Diego tradition. 
                It has changed locations a number of times, from the original Student Center hump to the Sun God Lawn, 
                to the Price Center plaza, to Warren Mall. Now it spreads its wings at RIMAC Field.
                UC San Diego Graduate students are eligible to attend the 2022 Sun God Festival!
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          {/* <Row>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> MISSION </span>
              </h1>
              <p className="home-about-body">
                To curate an annual music and arts festival that is the highlight of the UC San Diego undergraduate student experience.  
                We strive to build a sense of community through gathering our campus together to engage in our shared tradition.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> VISION </span>
              </h1>
              <p className="home-about-body">
                To create a positive impact and shape our campus culture by employing industry best practices, 
                promoting wellbeing, and empowering student agency of the festival.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
                <Col md={4} className="myAvtar">
                    <Tilt>
                    <img src={myImg} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
                <Col md={8} className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }}>
                    <span className="purple"> REGISTRATION </span>
                    </h1>
                    <h3 style={{ fontSize: "1.6em" }}>
                    <span className="purple"> Undergraduate Registration </span>
                    </h3>
                    <p className="home-about-body">
                    Registration for the 2022 Sun God Festival will open at 
                    <b className="purple"> Noon on Wednesday March 30th</b>,
                    and will close at 
                    <b className="purple"> Noon on Friday, April 22nd</b>. 
                    To attend the festival, you 
                    <b className="purple"> MUST </b>
                    register within this time frame. Once you complete the registration process, 
                    you will receive a confirmation email with additional information regarding the 
                    COVID-19 Vaccine Mandate required to attend. 
                    <b className="purple"> Please note that this confirmation email is NOT your festival ticket</b>. 
                    Your ticket with a unique QR code will be emailed to all 
                    registrants who are compliant with the COVID-19 Vaccine Mandate the day before the event
                    and will be required for entry.  Click here to register.
                    <br />
                    <br />
                    Graduated early? Taking the quarter off? Not a problem! 
                    All undergraduate students who have enrolled at UC San Diego for at least one quarter 
                    during the 2021-2022 school year. Summer Sessions are not applicable. 
                    </p>
                </Col>
            </Row> */}
        </Container>
      </Container>
      <Mission />
    </section>
  );
}
export default About;
