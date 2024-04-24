import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  // DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,

  SiRubyonrails,
  SiAndroidstudio,
  SiKotlin,
  SiGooglecloud, 
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiWebflow,
  SiFigma,
  SiAdobe,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMongodb,

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes   />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiWebflow   />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe   />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator   />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop   />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb     />
      </Col>
    </Row>
  );
}

export default Techstack;
