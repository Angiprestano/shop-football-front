import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const PageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const body = {
    email: email,
    password: password,
  };

  const [error, setError] = useState(false);

  const Login = () => {
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/homepage");
          return res.json();
        } else {
          setError(true);
          throw new Error("error on login");
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", "Bearer" + data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const token = localStorage.getItem("token");

  console.log(token);

  return (
    <>
      <Container className="d-flex justify-content-center mt-4">
        <Row className="justify-content-evenly align-align-items-center w-50 h-50 mt-5">
          <Col>
            <Form className="mt-5 pt-5 ps-3">
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                type="submit"
                className="buttons mb-3 bg-primary text-black border-secondary fw-semibold "
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  navigate("/register");
                }}
                type="submit"
                className="buttons mb-3 ms-2 bg-black border-secondary text-primary fw-semibold"
              >
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageLogin;
