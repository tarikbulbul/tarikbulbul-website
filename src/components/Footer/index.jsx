import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
    <Container fluid className="footer">
        <Row>
            <Col md="4" className="footer-copywright">
                <h3>Developed by Tarik Bulbul</h3>
            </Col>
            <Col md="4" className="footer-copywright">
                <h3>Copyright © {year}</h3>
            </Col>
            <Col md="4" className="footer-body">
                <ul className="footer-icons">
                    <li className="social-icons">
                        <a
                            href="https://github.com/tarikbulbul"
                            style={{ color: "white" }}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://twitter.com/Tarikbulbul0"
                            style={{ color: "white" }}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/tarikbulbul/"
                            style={{ color: "white" }}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.instagram.com/tarikbulbul.js/"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
  );
}

export default Footer;