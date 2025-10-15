import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiVisualstudio } from "react-icons/di";
import { GiTable, GiThunderBlade } from "react-icons/gi";
import { GrGithub } from "react-icons/gr";
import { SiEclipseide, SiPostman, SiVercel, SiCanva } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /> {/* Eclipse IDE icon */}
      </Col>
     <Col xs={4} md={2} className="tech-icons">
      <SiCanva/>
    </Col>
    </Row>
  );
}

export default Toolstack;
