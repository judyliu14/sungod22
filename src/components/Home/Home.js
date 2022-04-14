import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Projects/beachChairs.png";
import Particle from "../Particle";
import Registration from "./Registration";
import Type from "./Type";
import CountDownTimer from './CountDownTimer';

function Home() {

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const today = new Date(),
        sunGodDay = Date.parse("04/30/2022 12:00:00"),
        diff = sunGodDay - today;
  const daysHoursMinSecs = {days: Math.floor(diff / (day)), 
                            hours: Math.floor(diff % (day) / hour), 
                            minutes: Math.floor(diff % (hour) / minute), 
                            seconds: Math.floor(diff % (minute) / second)};

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> SUN GOD FESTIVAL 2022</strong>
              </h1>
              <h1 className="heading">
                <CountDownTimer daysHoursMinSecs={daysHoursMinSecs}/>
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
      <Registration />
    </section>
  );
}

export default Home;
