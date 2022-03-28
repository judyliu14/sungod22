import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Artists from "./Artists";

function Lineup() {
  return (
    <Container fluid className="lineup-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Lineup <strong className="purple">2022 </strong>
        </h1>

        <Artists />

      </Container>
    </Container>
  );
}

export default Lineup;
