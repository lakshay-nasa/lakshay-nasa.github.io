import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hey there! I'm <span className="green">Lakshay Nasa, </span>
          hailing from <span className="green"> Delhi, India.</span>
            <br />
            I'm deeply involved in software development, leveraging my skills as a technologist. Presently working as Community Operations Intern at KodeKloud.
            <br />
            In my academic journey, I'm currently pursuing a Bachelor of Technology in Electronics and Communication Engineering, with Honours in Machine Learning.
            <br />
            <br />
            Outside of coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
            <ImArrowRight /> Exploring new cultures through travel.
            </li>
            <li className="about-activity">
            <ImArrowRight /> Building communities and collaborating on meaningful projects.
            </li>
            <li className="about-activity">
            <ImArrowRight /> Meeting new people.
            </li>
            <li className="about-activity">
            <ImArrowRight /> Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My mantra? Keep learning, keep building & keep making a difference. "{" "}
          </p>
          {/* <footer className="blockquote-footer">Lakshay</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
