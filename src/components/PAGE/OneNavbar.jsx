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
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OneNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.token);

  const handleSearch = () => {
    const url = `http://localhost:3001/products/part_title?partOfTitle=${encodeURIComponent(
      searchTerm
    )}`;

    if (!token) {
      console.error("Token non trovato.");
      return;
    }
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati ricevuti dalla chiamata API:", data);
        setSearchResults(data);
        navigate("/result-forTitle", { state: { searchResults: data } });
      })
      .catch((error) => {
        setError(error.message);
      });
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
        <Navbar.Brand
          href="/homepage"
          className="text-white fw-semibold ms-2 textStyle"
        >
          Inter Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="/homepage" className="text-white textStyle">
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
                        <h6 className="textStyle fw-bold ">Uomo</h6>
                        <Link
                          to="/tshirtMan"
                          className="dropdown-item textStyle"
                        >
                          Magliette
                        </Link>
                        <Link
                          to="/sweatshirtMan"
                          className="dropdown-item textStyle"
                        >
                          Felpe
                        </Link>
                        <Link
                          to="/pantsMan"
                          className="dropdown-item textStyle"
                        >
                          Pantaloni
                        </Link>
                        <Link to="/suitMan" className="dropdown-item textStyle">
                          Tute
                        </Link>
                        <Link
                          to="/pajamasMan"
                          className="dropdown-item textStyle"
                        >
                          Pigiami
                        </Link>
                        <Link to="/setUomo" className="dropdown-item textStyle">
                          Set Calcio
                        </Link>
                      </Col>
                      <Col>
                        <h6 className="textStyle fw-bold ">Donna</h6>
                        <Link
                          to="/tshirtWomen"
                          className="dropdown-item textStyle"
                        >
                          Magliette
                        </Link>
                        <Link
                          to="/sweatshirtWomen"
                          className="dropdown-item textStyle"
                        >
                          Felpe
                        </Link>
                        <Link
                          to="/suitWomen"
                          className="dropdown-item textStyle"
                        >
                          Tute
                        </Link>
                        <Link
                          to="/pajamasWomen"
                          className="dropdown-item textStyle"
                        >
                          Pigiami
                        </Link>
                        <Link
                          to="/setDonna"
                          className="dropdown-item textStyle"
                        >
                          Set Calcio
                        </Link>
                      </Col>
                      <Col className="me-3 ms-2">
                        <h6 className="mt-3 textStyle fw-bold">Bambino</h6>
                        <Link
                          to="/tshirtKids"
                          className="dropdown-item textStyle"
                        >
                          Magliette
                        </Link>
                        <Link
                          to="/felpaKids"
                          className="dropdown-item textStyle"
                        >
                          Felpe
                        </Link>
                        <Link
                          to="/suitKids"
                          className="dropdown-item textStyle"
                        >
                          Tute
                        </Link>
                        <Link
                          to="/pajamasKids"
                          className="dropdown-item textStyle textStyle"
                        >
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
              <Nav.Link href="#" className="text-white textStyle">
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
                          className="dropdown-item ms-2 me-2 mt-2 mb-2 textStyle"
                        >
                          Accessori
                        </Link>
                      </Col>
                    </Row>
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link href="#" className="text-white textStyle fw-5">
                Accessori
              </Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={<Popover></Popover>}
            >
              <Nav.Link
                href="/salesTshirt"
                className="text-danger fw-bold textStyle"
              >
                Sconti
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search"
            className="d-flex justify-content-end textStyle"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
        <Button
          type="button"
          onClick={handleSearch}
          className="ms-3 fw-bold bg bg-black border border-black "
        >
          Cerca
        </Button>

        <Button
          className="textStyle bg bg-body-secondary text-black border border-black ms-2 custom-button "
          onClick={(e) => {
            e.preventDefault();
            navigate("/cart");
          }}
        >
          Carrello
        </Button>
      </Container>
    </Navbar>
  );
};

export default OneNavbar;
