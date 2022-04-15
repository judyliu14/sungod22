import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Registration(props) {
  return (
    // <Container fluid className="home-about-section" id="about">
        <Container>
            <Row>
                <Col className="home-about-description">
                    <h1>
                      REGISTRATION
                    </h1>
                    <h3 style={{ fontSize: "1.6em" }}>
                      Undergraduate Registration
                    </h3>
                    <p className="home-about-body">
                    Registration for the 2022 Sun God Festival will open at 
                    <b> Noon on Wednesday March 30th</b>,
                    and will close at 
                    <b> Noon on Friday, April 22nd</b>. 
                    To attend the festival, you 
                    <b> MUST </b>
                    register within this time frame. Once you complete the registration process, 
                    you will receive a confirmation email with additional information regarding the 
                    COVID-19 Vaccine Mandate required to attend. 
                    <b> Please note that this confirmation email is NOT your festival ticket</b>. 
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
            </Row>
        </Container>
    // </Container>
  );
}
export default Registration;
