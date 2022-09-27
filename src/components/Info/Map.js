import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import map from "../../Assets/SGF22_Map.jpg" 

function Map(props) {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={8} className="home-about-description">
              <h1>
                <strong>MAP</strong>
                
              </h1>
              <p className="home-about-body">
                <img src={map} className="img-fluid" alt="map" />
              </p>
              
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </section>
  );
}
export default Map;
