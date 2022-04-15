import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
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
                    <span className="purple"> Sun God Babies </span>
                </h1>
                <p className="home-about-body">
                    Sun God Babies is an annual campus-wide scavenger hunt that coincides with the Sun God Festival! Hundreds of Sun God inspired cutouts are hidden all over campus for students to find throughout a three week period. Once found, they can be exchanged for amazing and exclusive Sun God merchandise and discounts with Triton Outfitters!
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
                <p className="home-about-body">
                        <h1 style={{ fontSize: "1.6em" }}>
                            Terms & Conditions
                        </h1>
                        <ul>
                            <li>Only undergraduate students enrolled at UC San Diego for at least one quarter during the 2021-2022 school year are eligible to attend. Summer sessions are not applicable.</li>
                            <li>Ticket does not guarantee entry. Venue subject to capacity restrictions.</li>
                            <li>A limited number of graduate student tickets are available for purchase. All deadlines, vaccine compliance policies and other eligibility requirements apply. </li>
                            <li>In order to receive a ticket, one must register for the festival by Noon on Friday, April 22nd AND be compliant with the COVID-19 Vaccine Mandate by Noon on Wednesday, April 27th. Failure to do both of these will result in you not receiving a ticket to enter the event.</li>
                            <li>Attendees must follow the COVID-19 Vaccine Mandate, Testing Program, and other enhanced safety requirements related to COVID-19.</li>
                            <li>Student attendees are reminded that they are subject to the University Standards of Conduct, including the Student Conduct Procedures, and are encouraged to conduct themselves accordingly.</li>
                            <li>Medical Amnesty Program: Attendees are strongly encouraged to seek medical assistance for emergencies related to alcohol, controlled substances, COVID-19 tracing, or Sexual Violence and Sexual Harassment by contacting the closest University or Public Official (e.g., R.A./H.A., Law enforcement, Staff, etc.), or by calling (858)534-HELP (4357). Students who are afraid to seek help because of violations of the Student Conduct Procedures will not be subject to the formal student conduct process, so long as they are seeking help for themselves or others under the Medical Amnesty Program. For more information: Medical Amnesty Program (MAP).</li>
                            <li>Your ticket and unique QR code are not transferable. The theft, conversion or misuse of it, such as selling it to another individual, will be referred to the Office of Student Conduct and subject to the student conduct process.</li>
                        </ul>
                    </p>
              </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default SunGodBabies;
