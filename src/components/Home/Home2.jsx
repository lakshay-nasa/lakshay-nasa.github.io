import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/m-robo.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've explored various tech domains, picking up a thing or two... 🛠️
              <br />
              {/* <br />I am fluent in classics like
              <i>
                <b className="green"> Python, Javascript and C++ </b>
              </i>
              <br /> */}
              <br />
              My interests revolve around crafting innovative &nbsp;
              <i>
                <b className="green">solutions and products, </b>             particularly in{" "}
                <b className="green">
                  ML & DevOps &nbsp;
                </b>
              </i>
              Spaces.
              <br />
              <br />
              As an Open Source enthusiast, I have a particular passion for <b className="green">Cloud Native Tools.</b> My focus lies in devising practical solutions to
              <i>
                <b className="green">
                  {" "}
                  real-world challenges, fostering collaboration, and sharing insights with others.&nbsp;
                </b>
              </i>
              I strongly believe that being a developer is all about
              <i>
                <b className="green"> growth, development, and giving back to the community.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid m-robo" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lakshay-nasa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/lakshay1717"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://linkedin.com/in/lakshaynasa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:lakshay1717@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
