import { useState } from "react";
import {
  Button,
  Card,
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
import { Link, useLocation, useNavigate } from "react-router-dom";

const OneNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3001/products/product_title?title=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Errore durante la richiesta");
      }
      const data = await response.json();
      setSearchResults(data);
      setError("");
    } catch (error) {
      setError("Errore durante la ricerca. Riprova più tardi.");
      console.error("Errore durante la ricerca:", error);
    } finally {
      setLoading(false);
    }
  };

  const location = useLocation();
  const isLoginOrRegister =
    location.pathname === "/" || location.pathname === "/register";

  if (isLoginOrRegister) {
    return null;
  }

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
            <NavLink href="/homepage" className="text-white">
              Home
            </NavLink>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              show={showDropdown}
              onToggle={(show) => setShowDropdown(show)}
              overlay={
                <Popover id="popover-basic">
                  <Popover.Body>
                    <Row>
                      <Col className="me-3 ms-2">
                        <h6>Uomo</h6>
                        <Link to="/tshirtMan" className="dropdown-item">
                          Magliette
                        </Link>
                        <Link to="/sweatshirtMan" className="dropdown-item">
                          Felpe
                        </Link>
                        <Link to="/pantsMan" className="dropdown-item">
                          Pantaloni
                        </Link>
                        <Link to="/suitMan" className="dropdown-item">
                          Tute
                        </Link>
                        <Link to="/pajamasMan" className="dropdown-item">
                          Pigiami
                        </Link>
                        <Link to="/setUomo" className="dropdown-item">
                          Set Calcio
                        </Link>
                      </Col>
                      <Col>
                        <h6>Donna</h6>
                        <Link to="/tshirtWomen" className="dropdown-item">
                          Magliette
                        </Link>
                        <Link to="/sweatshirtWomen" className="dropdown-item">
                          Felpe
                        </Link>
                        <Link to="/suitWomen" className="dropdown-item">
                          Tute
                        </Link>
                        <Link to="/pajamasWomen" className="dropdown-item">
                          Pigiami
                        </Link>
                        <Link to="/setDonna" className="dropdown-item">
                          Set Calcio
                        </Link>
                      </Col>
                      <Col className="me-3 ms-2">
                        <h6 className="mt-3">Bambino</h6>
                        <Link to="/tshirtKids" className="dropdown-item">
                          Magliette
                        </Link>
                        <Link to="/felpaKids" className="dropdown-item">
                          Felpe
                        </Link>
                        <Link to="/suitKids" className="dropdown-item">
                          Tute
                        </Link>
                        <Link to="/pajamasKids" className="dropdown-item">
                          Pigiami
                        </Link>
                        <Link to="/setKids" className="dropdown-item">
                          Set Calcio
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
                        <Link
                          to="/accessories"
                          className="dropdown-item ms-2 me-2 mt-2 mb-2"
                        >
                          Accessori
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
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={<Popover></Popover>}
            >
              <Nav.Link href="/salesTshirt" className="text-danger fw-bold ">
                Sconti
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
        <Form onSubmit={handleSubmit} inline>
          <Form.Control
            type="text"
            placeholder="Search"
            className="d-flex justify-content-end"
            value={searchTerm}
            onChange={handleChange}
          />
        </Form>
        <Button
          type="submit"
          className="ms-3 fw-bold bg bg-black border border-black"
        >
          Cerca
        </Button>

        <Button
          className="bg bg-body-secondary text-black border border-black ms-2 custom-button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/cart");
          }}
        >
          Carrello
        </Button>

        {loading && <p>Caricamento...</p>}
        {error && <p>{error}</p>}
        {searchResults.length > 0 && (
          <div>
            <h5>Risultati della ricerca:</h5>
            <div>
              {searchResults.map((result) => (
                <Card key={result.id}>
                  <Card.Body>
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>{result.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default OneNavbar;
