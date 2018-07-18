import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

export default () => {
  return (
    <Footer color="unique-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#009cff" }}>
        <Container>
          <Row>
            <Col md="12">
              <div className="mb-5 flex-center">
                <a
                  className="gplus-ic"
                  href="https://plus.google.com/+MattSenko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-google-plus fa-lg white-text m-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  className="tw-ic"
                  href="https://twitter.com/mpskierbg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter fa-lg white-text m-3 fa-2x"> </i>
                </a>

                <a
                  className="li-ic"
                  href="https://www.linkedin.com/in/matthew-senko-68b5a717/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fa-lg white-text m-3 fa-2x"> </i>
                </a>
                <a
                  className="ins-ic"
                  href="https://www.instagram.com/mpskierbg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram fa-lg white-text m-3 fa-2x">
                    {" "}
                  </i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5 mb-4 text-center">
        <Row className="mt-3">
          <Col md="12" lg="12" xl="12" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> Chicago, IL 60605, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> msenko2@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 309 236 6408
            </p>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center p-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MattSenko </a>
        </Container>
      </div>
    </Footer>
  );
};
