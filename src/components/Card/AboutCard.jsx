import React from 'react';
import Card from 'react-bootstrap/Card';

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tarik Bulbul. </span>
            A Front-End Web Developer passionate about creating interactive applications and experiences on the web.
            I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard;