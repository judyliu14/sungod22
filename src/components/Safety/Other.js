import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
import Tilt from "react-parallax-tilt";

function Other() {
  return (
    <section>
    <Container fluid className="safety-section" id="about">
      <Container>
        <Row>
            <Col className="safety-description">
                <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> OTHER IMPORTANT PARTY TIPS </span>
                </h1>
                <ul>
                    <li className="safety-activity">
                        Non-UCSD-affiliated guests will not be allowed to stay in residential areas during the weekend of the Sun God Festival (April 26 – April 29).  Additionally, residents are only allowed in their respective residential areas during specified time periods during the weekend of the Sun God Festival. Please refer to your RA or Residential Life Office for more information on these policy changes and time periods. All on-campus residents are expected to observe the Housing and Residential Life policy on responsibly hosting gatherings in their living areas (regardless of whether alcohol is present). Residents hosting guests are responsible for ensuring that attendance does not exceed two guests per resident of their room/apartment.
                    </li>
                    <li className="safety-activity">
                        DO NOT serve alcohol to anyone under 21 and if you are under 21, don’t consume alcohol.
                    </li>
                    <li className="safety-activity">
                        If your neighbors call or stop by to tell you the party is too loud, be a good neighbor and turn down the volume.
                    </li>
                    <li className="safety-activity">
                        It’s okay to call the police if a party gets out of hand.
                    </li>
                    <li className="safety-activity">
                        If a guest has had too much to drink, don’t let them drive home. Call a taxi or arrange for a ride with another guest who is sober, or invite them to stay over.
                    </li>
                    <li className="safety-activity">
                        Acquaint yourself with the San Diego County social host laws and the consequences of breaking those laws. If caught breaking these laws, social hosts will be held accountable and may be: 1) cited/arrested, 2) fined up to $1000 or more, 3) serve up to 6 months in jail, and 4) be billed for law enforcement services. 
                    </li>
                    <li className="safety-activity">
                        Inside the festival or out, if you are approached by a police or security officer, comply with them. This will minimize your chances of further consequences and will help them get you the help you need.
                    </li>
                </ul>
            </Col>
        </Row>
      </Container>
    </Container>
  </section>
  );
}

export default Other;
