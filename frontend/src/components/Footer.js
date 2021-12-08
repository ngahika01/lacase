import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-light">
      <Container>
        <Row>
          <Col className="text-center py-3 ">
            <h4> Talk to us today. +254 793 810 040 </h4>
            <h5 className="p-2">
              {date.getFullYear() + " "}
              Copyright &copy; LA CASA DE LIQOUR.
            </h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
