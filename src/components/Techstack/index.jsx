import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillHtml5 } from 'react-icons/ai';
import {
    DiCss3,
    DiSass,
    DiJavascript1,
    DiReact,
} from 'react-icons/di';
import {BiLogoTailwindCss} from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';

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
            <BiLogoTailwindCss />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <BsFillBootstrapFill />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
    </Row>
  )
}

export default Techstack;