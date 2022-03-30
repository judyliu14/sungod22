import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/beachChairs.png";
import Tilt from "react-parallax-tilt";
import Other from "./Other"

function Alcohol() {
  return (
    <section>
    <Container fluid className="safety-section" id="about">
      <Container>
        <Row>
            <Col className="safety-description">
                <h1 style={{ fontSize: "2.6em" }}>
                    <span className="purple"> SEXUAL ASSULT PREVENTION </span>
                </h1>

                <h1 style={{ fontSize: "1.6em" }}>
                    <span className="purple"> Clarifying Consent </span>
                </h1>
                Consent is a mutual, affirmative, voluntary, and revocable agreement by each participant 
                to engage in sexual activity. An informed verbal “yes” must accompany positive and engaging 
                body language.
                <ul>
                    <li className="safety-activity">
                        The initiator of sexual activity is responsible for receiving consent from their partner. Obtaining consent is a continuous process, meaning consent to kissing doesn’t mean consent to everything else. Consent is voluntary and can be withdrawn at any time. Consent must be given without coercion, force, threats or intimidation by the initiator.  
                    </li>
                    <li className="safety-activity">
                        Consent cannot be given when someone is under the influence of drugs and/or alcohol. However, perpetrators may attempt to use alcohol and/or drugs to facilitate a sexual assault. Statistically, the majority of reported sexual assaults occur while one or both parties are under the influence of alcohol or drugs.  Alcohol or drugs is never an excuse for choosing to violate another person.
                    </li>
                    <li className="safety-activity">
                        There are a number of drugs that may be added to beverages with the intent of altering the consciousness or incapacitating a person without their knowledge. Substances are particularly dangerous when combined with alcohol, and often produce amnesia, leaving a victim unclear about what occurred.  These drugs can facilitate criminal activity, most often acts of sexual misconduct or sexual assault.
                    </li>
                    <li className="safety-activity">
                        Sexual assault is any unwanted, non-consensual behavior from kissing and fondling to rape. Ignorance of the law or of University policy concerning sexual assault, sexual misconduct and sexual harassment is never an excuse for non-consensual sexual behavior.
                    </li>
                </ul>

                <h1 style={{ fontSize: "1.6em" }}>
                    <span className="purple"> Preventing Sexual Assault </span>
                </h1>
                    Keeping UC San Diego safe is a community responsibility. Check out the tips below on how you can help prevent sexual assault:
                <ul>
                    <li className="safety-activity">
                        Identify common behaviors that often precede an assault. Recognizable red flags include seeing someone who is attempting to separate an intoxicated individual from their friends, or continuing to pour drinks for an individual who is clearly beyond their limit.
                    </li>
                    <li className="safety-activity">
                        Take action as a responsive bystander and remember to use IDEAS if you see those behaviors happening.  You can help someone who is intoxicated by reconnecting them with their friends, or calling a CSO to escort that person home. You can also notify any of the festival volunteers or law enforcement officials on site if you are concerned for someone’s safety and well-being.
                    </li>
                </ul>

                <h1 style={{ fontSize: "1.6em" }}>
                    <span className="purple"> Supporting Survivors of Sexual Assault </span>
                </h1>
                    If something happens to a friend, know you can be a responsive bystander by showing your support:
                <ul>
                    <li className="safety-activity">
                        Listen and believe them. Let them know that you care.
                    </li>
                    <li className="safety-activity">
                        Remember sexual assault is never the fault of the survivor.
                    </li>
                    <li className="safety-activity">
                        Be aware of your response and respect their decisions.
                    </li>
                    <li className="safety-activity">
                        Know the resources and seek support for yourself.
                    </li>
                </ul>

                <h1 style={{ fontSize: "1.6em" }}>
                    <span className="purple"> Resources </span>
                </h1>
                    <a href="https://students.ucsd.edu/sponsor/sarc/index.html" alt="CARE">CARE at the 
                    Sexual Assault Resource Center</a> is a confidential and free resource 
                    for all students, staff, and faculty affected by sexual assault, relationship violence, 
                    and stalking. If you or a friend need to speak with a confidential CARE advocate, 
                    call 858-534-5793.
            </Col>
        </Row>
      </Container>
    </Container>
    <Other />
  </section>
  );
}

export default Alcohol;
