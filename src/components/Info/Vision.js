import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Vision(props) {
  return (
    <section>
      {/* <Container fluid className="home-about-section" id="about"> */}
        <Container>
          <Row>
            <Col className="home-about-description">
              <h1>
                VISION
              </h1>
              <p className="home-about-body">
                To create a positive impact and shape our campus culture by employing industry best practices, 
                promoting wellbeing, and empowering student agency of the festival.
              </p>
            </Col>
          </Row>
          <Row> 
              <Col style={{padding: '50px'}}>
              </Col>
            </Row>
        </Container>
    </section>
  );
}
export default Vision;
