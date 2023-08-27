import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particle from '../../components/Particle';
import ProjectCard from '../../components/Card/ProjectCard';
import projects from '../../data';

const Projects = () => {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, index) => (
              <Col md={4} className="project-card">
                <ProjectCard key={index} {...project} />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;