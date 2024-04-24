import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { MdGrading } from "react-icons/md";  // Assuming you have a suitable icon for "Learn More"

function BlogCards(props) {
  return (
    <Card className="blog-card-view">
      <Card.Img className="blog-img" variant="top" src={props.imgPath} alt="" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }} className="blue card-title-creations">{props.title}</Card.Title>
      <div className="horizontal-line"></div>
        <Card.Text style={{ textAlign: "justify" }} className="creation-description">
          {props.description}
        </Card.Text>
        
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            // target="_blank"
            style={{ marginLeft: "10px" }}
            className="learn-more-button"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {props.learnMoreLink && ( // Conditionally render Learn More button
          <Button
            variant="secondary"
            href={props.learnMoreLink}
            // target="_blank"
            style={{ marginLeft: "10px" }}
            className="learn-more-button"
          >
            <MdGrading /> &nbsp;
            {"Learn More"}
          </Button>
        )}

      </Card.Body>
    </Card>
  );
}

export default BlogCards;