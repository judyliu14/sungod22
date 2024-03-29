import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import ascelogo from "../Assets/asce-logo.png"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <a
            href="https://asce.ucsd.edu/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={ascelogo} className="img-fluid ascelogo" alt="asce" />
          </a>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>SUN GOD FESTIVAL {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/sungodfestival/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/ucsdasce/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ucsdasce/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.tiktok.com/@ascebear/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
