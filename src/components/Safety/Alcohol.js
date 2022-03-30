import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SexualAssult from "./SexualAssult"

function Alcohol() {
  return (
    <section>
    <Container fluid className="safety-section" id="about">
      <Container>
        <Row>
            <Col className="safety-description">
                <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> ALCOHOL SAFETY </span>
                </h1>
                You don’t have to drink to have a good time at the Sun God Festival, but if you do choose to:
                <ol>
                    <li className="safety-activity">
                        Eat before, during, and after the event. 
                    </li>
                    <li className="safety-activity">
                        Alternate between alcoholic and non-alcoholic drinks.
                    </li>
                    <li className="safety-activity">
                        Choose beer or cider instead of shots.
                    </li>
                    <li className="safety-activity">
                        Keep track of the number of drinks you have (especially the amount of liquor). Determine in advance the number of drinks you will consume, and stick to it! Keep in mind that one drink is a 12 oz beer, 5 oz of wine, or 1.5 oz of liquor.
                    </li>
                    <li className="safety-activity">
                        Tell your friends to let you know when you’ve had too much to drink.
                    </li>
                    <li className="safety-activity">
                        Pace your drinks to one or less per hour, and avoid drinking games.
                    </li>
                    <li className="safety-activity">
                        Don’t take (or give) unwanted peer pressure
                    </li>
                    <li className="safety-activity">
                        Have a designated driver, or sign up for <a href="http://as.ucsd.edu/saferides" alt="A.S. Safe Rides">A.S. Safe Rides</a>!
                    </li>
                    <li className="safety-activity">
                        Watch over your friends and peers. If you see someone in medically dangerous conditions, do not be afraid to reach out to a security guard, police officer, event staff or event volunteer to ask for help. Your health and safety is our first priority!
                    </li>
                </ol>
            </Col>
        </Row>
      </Container>
    </Container>
    <SexualAssult />
  </section>
  );
}

export default Alcohol;
