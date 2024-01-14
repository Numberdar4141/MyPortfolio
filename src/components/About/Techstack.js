import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiTailwindcss, SiRstudio  } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";

import {
  DiJavascript1,
  DiReact,
  DiMysql,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
      <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
      <BsFiletypeXml/>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
      <SiRstudio />
      </Col>
    </Row>
  );
}

export default Techstack;
