import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const payload = {
    name: name,
    surname: surname,
    email: email,
    address: address,
    password: password,
  };

  const registerUser = () => {
    fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error on login");
        }
      })
      .then((data) => {
        console.log(data);
        alert("Registered correctly!");
        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container className="d-flex justify-content-center mt-4">
        <Row className="justify-content-evenly align-align-items-center w-50 h-50 mt-5">
          <Col>
            <h2>Registrati</h2>
            <Form
              className="mt-5 pt-5 ps-3"
              onSubmit={(e) => {
                e.preventDefault();
                registerUser();
              }}
            >
              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              >
                <Form.Label className="fw-semibold">Name</Form.Label>
                <Form.Control type="text" placeholder="Inserisci nome" />
              </Form.Group>

              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              >
                <Form.Label className="fw-semibold">Surname</Form.Label>
                <Form.Control type="text" placeholder="Inserisci cognome" />
              </Form.Group>

              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              >
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control type="email" placeholder="Inserisci email" />
              </Form.Group>

              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              >
                <Form.Label className="fw-semibold">Address</Form.Label>
                <Form.Control type="text" placeholder="Inserisci indirizzo" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              >
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
              <Button
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

export default Register;
