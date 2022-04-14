import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Registration from "./Registration";

function Vision(props) {
  return (
    <section>
      {/* <Container fluid className="home-about-section" id="about"> */}
        <Container>
          <Row>
            <Col className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> VISION </span>
              </h1>
              <p className="home-about-body">
                To create a positive impact and shape our campus culture by employing industry best practices, 
                promoting wellbeing, and empowering student agency of the festival.
              </p>
            </Col>
          </Row>
        </Container>
      {/* </Container> */}
      <Registration />
    </section>
  );
}
export default Vision;
