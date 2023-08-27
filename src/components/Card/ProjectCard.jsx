import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';
import { RiGithubLine } from 'react-icons/ri';

const ProjectCard = ({ imgPath, title, description, projectLink, codeLink }) => {
  return (
    <Card className="project-card-view">
        <Card.Img variant="top" src={imgPath} alt="card-img" style={{ width: '100%', height: '220px'  }} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ textAlign: "justify", minHeight: "200px" }} className="cardtext">
                {description}
            </Card.Text>
            <Button variant="primary" href={projectLink} target="_blank">
                <BiLinkExternal /> &nbsp;
                View Project
            </Button>
            <Button className="viewcodebtn" variant="primary" href={codeLink} target="_blank">
                <RiGithubLine   /> &nbsp;
                View Code
            </Button>
        </Card.Body>
    </Card>
  )
}

export default ProjectCard;