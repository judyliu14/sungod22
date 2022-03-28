import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
import Mission from "./Mission"
import Tilt from "react-parallax-tilt";

function Info(props) {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
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
        </Container>
      </Container>
      <Mission />
    </section>
  );
}
export default Info;
