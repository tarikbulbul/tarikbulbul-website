import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    SiVisualstudiocode,
    SiPostman,
} from 'react-icons/si';
import { DiNpm } from 'react-icons/di';

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNpm /> 
        </Col>
    </Row>
  )
}

export default Toolstack;