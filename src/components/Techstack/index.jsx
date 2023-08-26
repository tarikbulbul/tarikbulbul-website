import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiCss3,
    DiSass,
} from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <AiFillHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiCss3 /> 
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiSass />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
    </Row>
  )
}

export default Techstack;