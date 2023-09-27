import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiVisualstudiocode } from 'react-icons/si';
import { DiGit,DiNpm } from 'react-icons/di';
import {AiFillGithub} from 'react-icons/ai';
import { RxVercelLogo } from 'react-icons/rx';
import { BiLogoFirebase, BiLogoFigma } from 'react-icons/bi';

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <AiFillGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNpm /> 
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <RxVercelLogo /> 
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <BiLogoFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <BiLogoFigma />
        </Col>
    </Row>
  )
}

export default Toolstack;