import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { MdOutlineTimeline } from "react-icons/md";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

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
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <div className="name-logo">
            <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@700&display=swap" rel="stylesheet" />
            <h1>
              {/* <a href="https://lakshay-nasa.github.io">Lakshay Nasa</a> */}
              <a href="/">&lt;Lakshay Nasa&gt;</a>
            </h1>
          </div>

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
          {/* <Nav className="ms-auto me-auto" defaultActiveKey="#home"> */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} title="Home">
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                title="About"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/timeline"
                onClick={() => updateExpanded(false)}
                title="Timeline"
              >
                <MdOutlineTimeline style={{ marginBottom: "2px" }} /> Timeline
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                title="Projects"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "} Projects

              </Nav.Link>
            </Nav.Item>



            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/creations"
                onClick={() => updateExpanded(false)}
                title="My Creations"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Creations
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item className="resume-btn">
              <Button
                href="/resume"
                // target="_blank"
                className="resume"
              >
                Resume
                <CgFileDocument style={{ marginLeft: "4px" }} />
                {/* <CgGitFork style={{ fontSize: "1.2em" }} />{" "} */}
                {/* <AiFillStar style={{ fontSize: "1.1em" }} /> */}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
