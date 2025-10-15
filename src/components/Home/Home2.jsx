import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/Projects/bharani.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                     <h6 style={{ fontSize: "1.5em", paddingBottom: "20px" }}>
              Let Intro <strong className="purple">Myself</strong>
            </h6>
                    Hi Everyone, I am <span className="purple">Bharanitharan</span> from{" "}
                    <span className="purple">Pudukkottai, India.</span>
                    <br />
                    I am currently studying Java Fullstack in Besant Teachnologies at Velachery, Chennai.
                    <br />
                    I have completed a Bachelor of  Science in Computer Science in J.J College of Arts and Science at Pudukkottai Affiliated to Bharathidasan University at Tiruchirappalli 
                   
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width={330} height={300}  />
            </Tilt>
          </Col>
        </Row>

          
        <Row>
          <Col md={12} className="home-about-social ">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
<ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bharanitharan44"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bharani-tharan-b74255361/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/b_h_a_r_a_n_i_.04?igsh=amZuYXVxbmd3eWdu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
