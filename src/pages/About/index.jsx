import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particle from '../../components/Particle';
import laptopImg from '../../assets/about.png';
import Card from '../../components/Card/AboutCard';
import Techstack from '../../components/Techstack';

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px"}} className="rowpaddingtop">
          <Col
            className="colpaddingtop"
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px"}}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  )
}

export default About;