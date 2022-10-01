import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/hero" className="nav_link">
                Hero
              </Nav.Link>
              <Nav.Link href="/team" className="nav_link">
                Team
              </Nav.Link>
              <Nav.Link href="/contact" className="nav_link">
                Contact
              </Nav.Link>
              <Nav.Link href="/faq" className="nav_link">
                Faq
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
