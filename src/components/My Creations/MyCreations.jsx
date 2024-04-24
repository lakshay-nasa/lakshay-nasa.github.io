import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./CreationCards";
import Particle from "../Common/Particle";
import DMV from "../../Assets/Creations/DMV.gif"
import RCS from "../../Assets/Creations/RCS.gif"
import visioGen_ from "../../Assets/Creations/visioGen_.gif"
import gallery from "../../Assets/Creations/gallery.gif"

function Blogs() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          My <strong className="blue">Creations 🌈 </strong>
        </h1>
        <p style={{ color: "white" }}>
        Explore some of the latest creations,
        <br />
        I've poured my passion and energy into.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={DMV}
              isBlog={false}
              title=" Designs | Animations | Graphics "
              description="Checkout my Designs, graphics and animations."
              learnMoreLink="/gallery"              
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={gallery}
              isBlog={false}
              title=" Engagements & Events "
              description="Dive into my journey through various industry events and engagements. Discover the insights I've gained and the impact these experiences have had on my professional growth."
              learnMoreLink="/engagements"              
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={visioGen_}
              isBlog={false}
              title="3D VisioGen"
              description="Engineered a 3D reconstruction system with SFM, revolutionizing model creation transforming 2D image to 3D
              models for use in architecture, robotics, and virtual reality."
              learnMoreLink="/visiogen"
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={RCS}
              isBlog={false}
              title="Automation | RCS"
              description="Real-time Blog empowering farmers to remotely control and power tools, mitigating unpleasant weather."
              learnMoreLink="/automation"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
