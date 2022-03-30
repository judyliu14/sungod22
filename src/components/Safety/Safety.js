import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Alcohol from "./Alcohol"
import Particle from "../Particle";

function Safety() {
  return (
    <section>
    <Container fluid className="safety-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col className="safety-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> DRUG SAFETY </span>
            </h1>

            <ol>
              <li className="safety-activity">
                Do NOT mix drugs and alcohol. There is no way to anticipate how your body 
                will react to the mixture- the reaction could be very serious or even fatal.
              </li>
              <li className="safety-activity">
                Remember: You never know what you are actually taking. Though distributors 
                may assure you that you are getting a certain drug, there is a high likelihood 
                that this drug has been cut with something else, or is a different drug entirely. 
                This is especially common with pills. 
              </li>
              <li className="safety-activity">
                If you do choose to engage in drug use:
                <ul>
                  <li>
                    Test your pills with an affordable drug testing kit, like those sold at dancesafe.org. 
                    DISCLAIMER: Drug testing kits do not indicate that a substance is safe. 
                    Drug use is never 100% safe. 
                  </li>
                  <li>
                    Make sure to remain hydrated. A good rule of thumb is to drink about two cups of water 
                    (500ml) every hour. Be careful to not consume water too quickly- this can cause an electrolyte 
                    imbalance that could become fatal. 
                  </li>
                  <li>
                    If you do not feel well, seek help immediately! DO NOT SLEEP IT OFF. 
                    The symptoms of drug overdose can be the same, more exaggerated, 
                    or totally different than those of excessive alcohol use. 
                  </li>
                  <li>
                    You WILL NOT be punished for your drug/alcohol use retroactively if you seek help from an official. 
                    Your safety is our first priority.
                  </li>
                </ul>
              </li>
              <li className="safety-activity">
              For friends of people who are engaging in drug use:
                <ul>
                  <li>
                    Monitor your friend, and make sure they are drinking enough water.
                  </li>
                  <li>
                    If they are displaying extreme or out of character behavior, get them help. 
                    It could be the result of drugs or excessive alcohol in their system, 
                    and their health may be at risk.
                  </li>
                  <li>
                    By speaking up you could save your friend from serious harm, 
                    and could even save their life.
                  </li>
                </ul>
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </Container>
    <Alcohol />
  </section>
  );
}

export default Safety;
