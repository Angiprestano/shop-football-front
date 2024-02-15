import { useState } from "react";
import {
  Button,
  Col,
  Form,
  NavLink,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const OneNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1024px-FC_Internazionale_Milano_2021.svg.png"
          className="logo mt-1 me-3"
        ></img>
        <Navbar.Brand href="#home" className="text-white fw-semibold ms-2">
          Inter Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="text-white">Home</NavLink>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              show={showDropdown}
              onToggle={(show) => setShowDropdown(show)}
              overlay={
                <Popover id="popover-basic">
                  <Popover.Body>
                    <Row>
                      <Col>
                        <h6>Uomo</h6>
                        <Link to="/tshirtMan" className="dropdown-item">
                          Maglietta Uomo
                        </Link>
                        <Link to="/action2" className="dropdown-item">
                          Action 2
                        </Link>
                        <Link to="/action3" className="dropdown-item">
                          Action 3
                        </Link>
                        <Link to="/action4" className="dropdown-item">
                          Action 4
                        </Link>
                      </Col>
                      <Col>
                        <h6>Donna</h6>
                        <Link to="/action5" className="dropdown-item">
                          Action 5
                        </Link>
                        <Link to="/action6" className="dropdown-item">
                          Action 6
                        </Link>
                        <Link to="/action7" className="dropdown-item">
                          Action 7
                        </Link>
                        <Link to="/action8" className="dropdown-item">
                          Action 8
                        </Link>
                      </Col>
                      <Col>
                        <h6>Bambino</h6>
                        <Link to="/action9" className="dropdown-item">
                          Action 9
                        </Link>
                        <Link to="/action10" className="dropdown-item">
                          Action 10
                        </Link>
                        <Link to="/action11" className="dropdown-item">
                          Action 11
                        </Link>
                        <Link to="/action12" className="dropdown-item">
                          Action 12
                        </Link>
                      </Col>
                    </Row>
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link href="#" className="text-white">
                Abbigliamento
              </Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger
              trigger="click"
              placement="bottom"
              show={showDropdown1}
              onToggle={(show) => setShowDropdown1(show)}
              overlay={
                <Popover id="popover-basic">
                  <Popover.Body>
                    <Row>
                      <Col>
                        <Link to="/action1" className="dropdown-item">
                          Action 1
                        </Link>
                        <Link to="/action2" className="dropdown-item">
                          Action 2
                        </Link>
                      </Col>
                      <Col>
                        <Link to="/action3" className="dropdown-item">
                          Action 3
                        </Link>
                        <Link to="/action4" className="dropdown-item">
                          Action 4
                        </Link>
                      </Col>
                      <Col>
                        <Link to="/action5" className="dropdown-item">
                          Action 5
                        </Link>
                        <Link to="/action6" className="dropdown-item">
                          Action 6
                        </Link>
                      </Col>
                      <Col>
                        <Link to="/action7" className="dropdown-item">
                          Action 7
                        </Link>
                        <Link to="/action8" className="dropdown-item">
                          Action 8
                        </Link>
                      </Col>
                    </Row>
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link href="#" className="text-white">
                Accessori
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Form.Control
            type="text"
            placeholder="Search"
            className="d-flex justify-content-end"
          />
        </Form>
        <Button type="submit" className="ms-3 fw-bold bg bg-black">
          Cerca
        </Button>
      </Container>
    </Navbar>
  );
};

export default OneNavbar;
