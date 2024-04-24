import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Common/Particle";
import weatherApp from "../../Assets/Projects/weatherApp.gif";
import crickPy from "../../Assets/Projects/crickPy.gif";
import VisioGen from "../../Assets/Projects/VisioGen.gif";
import ACS from "../../Assets/Projects/ACS.gif";
import dok from "../../Assets/Projects/dok.png";
import circleEver from "../../Assets/Projects/circleEver.gif";
import pizzania from "../../Assets/Projects/pizzania.gif";
import ror from "../../Assets/Projects/ror.gif";
import RCS from "../../Assets/Creations/RCS.gif"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works 🏗️ </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VisioGen}
              isBlog={false}
              title="3D VisioGen"
              description="Engineered a 3D reconstruction system with SFM, revolutionizing model creation transforming 2D image to 3D
              models for use in architecture, robotics, and virtual reality."
              techStack="lightglue | OpenCV | PyTorch | SciPy | SFM | pyvista | MatplotLib | Joblib "
              demoLink="/visiogen"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={circleEver}
              isBlog={false}
              title="CircleEver"
              description="Award-winning Android app, connecting university students with diverse societies. Featured in local newspaper."
              techStack="Kotlin | Android Studio | Firebase | Jetpack Compose "
              ghLink="https://github.com/lakshay-nasa/CircleEver"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ACS}
              isBlog={false}
              title="Access Control System"
              description="an Access Control System developed using Python and integrated with Firebase for real-time user authentication and management. "
              techStack="Python | OpenCV | cvzone | face_recognition | Firebase"
              ghLink="https://github.com/lakshay-nasa/CricketPy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ror}
              isBlog={false}
              title="API with Ruby On Rails"
              description="Playing around with api development with Ruby on Rails."
              techStack="PostgreSQL | Postman | RoR"
              ghLink="https://github.com/lakshay-nasa/CricketPy"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dok}
              isBlog={false}
              title="how-to-dok"
              description="Contributed to project to develop best practices, examples to run various use cases on Kubernetes. "
              techStack="NodeJS-Express.js | Docker | Kubernetes | Git-Argo Workflow | K8ssandra | CI/CD | MinIO"
              ghLink="https://github.com/dokc/explorers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzania}
              isBlog={false}
              title="Pizzania"
              description="Experimenting with WebFlow creating Pizza Store."
              techStack="Webflow"
              demoLink="https://pizzania.webflow.io"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              description="An API based app which shows weather conditions along with picture based on location. 
              
              It used openweathermap API for real-time information on weather at a place."
              techStack="Flask | API | Python | HTML-CSS | Containerization"
              ghLink="https://github.com/lakshay-nasa/WeatherApp"
              demoLink="https://weatherapp-6l34.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RCS}
              isBlog={false}
              title="Automation | Remote Control System"
              description="Real-time project empowering farmers to remotely control and power tools, mitigating unpleasant weather."
              techStack="Arduino | Relay | Sensors | Bluetooth Module."
              demoLink="/automation"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crickPy}
              isBlog={false}
              title="CrickPy"
              description="A simple Command Line game based upon real-time cricket, simply played with numbers. "
              techStack="Python"
              ghLink="https://github.com/lakshay-nasa/CricketPy"e 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
