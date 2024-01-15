import React from "react";
import { Container, Row, Col } from "reactstrap";
// import heroImg from "../../assests/images/hero-img1.png";
import "../Styles/hero-section.css";

const HeroSection = () => {
  return (
    <section id="1">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere Learn on your  Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut saepe voluptatum earum  delectus deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="imag">
            <img src={"Images/hero-img1.png"} alt="" className="w-100 hero__img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
