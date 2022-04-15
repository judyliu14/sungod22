import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mySign from "../../Assets/Projects/sign.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";

const registerLink = "https://ucsd.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=SGF&linkID=ucsd-arts&shopperContext=&caller=&appCode="

function RegistrationInfo() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Particle />
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
                <h1>
                  Registration
                </h1>
                <p className="home-about-body">
                    Registration for the 2022 Sun God Festival will open at Noon on Wednesday, 
                    March 30th and will close at Noon on Friday, April 22nd. To attend the festival, 
                    you MUST register within this time frame. Once you complete the registration process, 
                    you will receive a confirmation email with additional information regarding the 
                    COVID-19 Vaccine Mandate required to attend. Please note that this confirmation 
                    email is NOT your festival ticket. Festival tickets with unique QR codes will be 
                    emailed to those who registered for the festival by Noon on Friday, April 22nd 
                    AND are compliant with the COVID-19 Vaccine Mandate by Noon on Wednesday, April 27th. 
                    Tickets will be sent out the day before the event and will be required for entry. 
                    No exceptions will be made. 
                    <br />
                </p>
                <p className="home-about-body">
                    Graduated early? Taking the quarter off? Not a problem! All undergraduate students who have enrolled at UC San Diego for at least one quarter during the 2021-2022 school year are eligible to attend Sun God. Summer Sessions are not applicable. 
                </p>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={registerLink}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        &nbsp;<b>Register Here</b>
                    </Button>
                </Row>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={mySign} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                <h1>
                    Graduate Tickets
                </h1>
                <p className="home-about-body">
                    Currently enrolled UC San Diego Graduate students are eligible to purchase a ticket to the 2022 Sun God Festival! This includes students registered in UCSD Graduate Programs, Rady School, Scripps Institution of Oceanography, School of Global Policy & Strategy, UC San Diego School of Medicine and Skaggs School of Pharmacy.
                    <br />
                    <br />
                    To purchase a graduate student ticket, you must complete the purchase by Noon on Friday, April 22nd. Once you complete the purchase, you will receive a confirmation email with additional information regarding the COVID-19 Vaccine Mandate required to attend. Please note that this confirmation email is NOT your festival ticket. Festival tickets with unique QR codes will be emailed to those who purchased a ticket for the festival by Noon on Friday, April 22nd AND are compliant with the COVID-19 Vaccine Mandate by Noon on Wednesday, April 27th. Tickets will be sent out the day before the event and will be required for entry. No exceptions will be made.
                    <br />
                    <br />
                    A limited number of tickets for UC San Diego Graduate Students are available for purchase.
                </p>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={registerLink}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        &nbsp;<b>Graduate Tickets</b>
                    </Button>
                </Row>
            </Col>
          </Row>
          <Row>
              <Col className="home-about-description">
                <h1>
                    On the day of festival:
                </h1>
                <p className="home-about-body">
                    Entrance Process: The entrance process for the 2022 Sun God Festival will be similar to what can be expected at most large-scale festivals so please plan accordingly:
                    <ul>
                        <li>Festival ticket: Festival tickets will be emailed to all those who have successfully registered by Noon on Friday, April 22nd and are compliant with the COVID-19 Vaccinate Mandate by Noon on Wednesday, April 27th. We highly recommend loading your ticket on your phone before arriving at the entrance to avoid connectivity issues caused by large crowds. </li>
                        <li>Security Screening: All attendees are subject to a pat down and bag check. Drug recognition experts and drug-detection dogs will be present at the entrance. Visit our FAQs for a list of prohibited items.</li>
                        <li>Enter: Enjoy the show!</li>
                    </ul>
                </p>
              </Col>
          </Row>
          <Row>
              <Col className="home-about-description">
                <h1>
                    Festival Hours
                </h1>
                <p className="home-about-body">
                    Festival Hours: 12pm - 6pm. Re-Entry will not be allowed. Have Questions? Visit our FAQs for more info!
                </p>
              </Col>
          </Row>
          <Row>
            <Col className="home-about-description">
                  <h1>
                      Terms & Conditions
                  </h1>
                  <p className="home-about-body">
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
export default RegistrationInfo;
