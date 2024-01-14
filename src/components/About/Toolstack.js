import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiEclipseide,
  SiReplit,
  SiAndroidstudio,
  SiRstudio,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiReplit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
