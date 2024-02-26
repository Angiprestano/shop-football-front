import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/action";

const PageLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const body = {
    email: email,
    password: password,
  };

  const [error, setError] = useState(false);

  const token = localStorage.getItem("token");

  console.log(token);

  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url("https://cidadeolimpica.com.br/wp-content/uploads/2020/12/inter-milano-pc6-scaled.jpg")`,
        minHeight: "100vh",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className=" d-flex justify-content-center">
        <Row className="justify-content-evenly align-align-items-center w-50 h-50 mt-5">
          <Col>
            <Form className="mt-5 pt-3 ps-3">
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold text-white">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserisci l'email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-semibold text-white">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(body);
                  }}
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(login(body));
                  navigate("/homepage");
                }}
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
    </div>
  );
};

export default PageLogin;
