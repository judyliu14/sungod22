import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Projects/beachChairs.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {

  const calculateTimeLeft = () => {

    let date = new Date();
    let year = date.getFullYear();
    const difference = +new Date('04/30/${year}' - +new Date());
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft;
  }
  const timeLeft = calculateTimeLeft();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> SUNGOD 2022</strong>
              </h1>

              <h1 className="heading-name">
                {timeLeft.days} days 
                {timeLeft.hours} hours 
                {timeLeft.minutes} minutes
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
