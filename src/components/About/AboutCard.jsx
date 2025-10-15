import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I fell in love <span className="purple">Programming </span>
            and i have at learn something, I think,
            I am fluent and classics like <span className="purple">JavaScript, Flutter and React.</span>
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Pubg
            </li>
            <li className="about-activity">
              <ImPointRight />  Repair devices
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud Projects
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
