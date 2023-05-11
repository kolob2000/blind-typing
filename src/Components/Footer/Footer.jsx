import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => (
  <Container>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <Col className="col-md-4 d-flex align-items-center gap-3">
        <Link to={"/"} className={"navbar-brand fw-bold"}>
          BlindTP
        </Link>
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2023 Company, Inc
        </span>
      </Col>
    </footer>
  </Container>
);

