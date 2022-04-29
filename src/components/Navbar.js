import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo-black.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { NavDropdown } from "react-bootstrap";

const registerLink = "https://ucsd.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=SGF&linkID=ucsd-arts&shopperContext=&caller=&appCode="
const apparelLink = "https://to.ucsd.edu/collections/sun-god-festival-2022"

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const navDropdownTitle = (<div><AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }}/>{" "}[ Info ]</div>)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/lineup"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Lineup
              </Nav.Link>
            </Nav.Item>
            
            <NavDropdown title={navDropdownTitle} id="navbarScrollingDropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/info" onClick={() => updateExpanded(false)}>About the Festival</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/registration-info" onClick={() => updateExpanded(false)}>Registration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/map" onClick={() => updateExpanded(false)}>Map</NavDropdown.Item>
              <NavDropdown.Item href={apparelLink} target="_blank" onClick={() => updateExpanded(false)}>Apparel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transportation" onClick={() => updateExpanded(false)}>Transportation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/adainfo" onClick={() => updateExpanded(false)}>ADA Info</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/volunteers" onClick={() => updateExpanded(false)}>Volunteers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sun-god-for-a-cause" onClick={() => updateExpanded(false)}>Sun God For A Cause</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sgfbabies" onClick={() => updateExpanded(false)}>Sun God Babies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq" onClick={() => updateExpanded(false)}>FAQ</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/safety"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Safety
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/sponsors"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sponsors
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href={registerLink}
                target="_blank"
                className="fork-btn-inner"
              >
                Register{" "}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
