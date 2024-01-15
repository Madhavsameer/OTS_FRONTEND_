
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../Styles/choose-us.css";

const ChooseUs = () => {

  return (
    <section >
      <Container>
        <div className="main">
        <Row>
          <Col>
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="choose__img">
             
    <iframe width="620" height="404" src="https://www.youtube.com/embed/FvbUy6ZOG6s" title="HIS 101 (8) - First Zoom Class Session from Aug 18th, 2020" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;
