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
      <div
        className="background-image"
        style={{
          backgroundImage: `url("https://besthqwallpapers.com/Uploads/10-2-2020/121272/fc-internazionale-logo-italian-football-club-metal-emblem-blue-black-metal-mesh-background-fc-internazionale.jpg")`,
          minHeight: "100vh",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container className=" d-flex justify-content-center mt-4">
          <Row className="justify-content-evenly align-align-items-center w-50 h-50 mt-5">
            <Col>
              <h2 className="mt-2 text-white ">Registrati</h2>
              <Form
                className="mt-3 pt-3 ps-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  registerUser();
                }}
              >
                <Form.Group
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                >
                  <Form.Label className="fw-semibold text-white ">
                    Nome
                  </Form.Label>
                  <Form.Control type="text" placeholder="Inserisci nome" />
                </Form.Group>

                <Form.Group
                  className="mb-3 mt-3"
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                >
                  <Form.Label className="fw-semibold text-white">
                    Cognome
                  </Form.Label>
                  <Form.Control type="text" placeholder="Inserisci cognome" />
                </Form.Group>

                <Form.Group
                  className="mb-3 mt-3"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                >
                  <Form.Label className="fw-semibold text-white">
                    Email
                  </Form.Label>
                  <Form.Control type="email" placeholder="Inserisci email" />
                </Form.Group>

                <Form.Group
                  className="mb-3 mt-3"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                >
                  <Form.Label className="fw-semibold text-white">
                    Indirizzo
                  </Form.Label>
                  <Form.Control type="text" placeholder="Inserisci indirizzo" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                >
                  <Form.Label className="fw-semibold text-white">
                    Password
                  </Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button
                  type="submit"
                  className="buttons text-primary mb-3 ms-2 mt-3 bg-black border-black fw-semibold"
                >
                  Registrati
                </Button>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                  type="submit"
                  className="mb-3 ms-2 mt-3 bg-danger border-danger text-black fw-semibold"
                >
                  Logout
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
