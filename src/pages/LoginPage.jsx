import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, FormCheck, FormText, Button } from "react-bootstrap";
import { createRoutesFromElements } from "react-router-dom";

const LoginPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Set showNavbar dan showFooter menjadi true saat komponen LoginPage di-mount
    setShowNavbar(false);
    setShowFooter(false);
  }, []);
  return (
    <div className="body-login">
      <div className="login">
        <Container className="container-loginpage mt-5">
          <Row>
            <Col>
              <h2 className="text-center mb-2 fw-bold">Studiobook</h2>
            </Col>
          </Row>

          <Row className="row-cols-lg-2 row cols-1">
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Username" />
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="**********" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <img src="src\assets\img\gopro.png" alt="GoPro" className="text-center mb-2" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit" className="btn-loginpage btn btn-dark -btn-lg rounded-1 me-2 mb-xs-0 mb-2 mt-4 text-center align-item-center">
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
