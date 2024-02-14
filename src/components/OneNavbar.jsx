import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const OneNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1024px-FC_Internazionale_Milano_2021.svg.png"
          className="logo mt-1 me-3"
        ></img>
        <Navbar.Brand href="#home" className="fw-semibold">
          Inter Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-semibold">
              Home
            </Nav.Link>
            <NavDropdown
              title="Abbigliamento"
              id="basic-nav-dropdown"
              className="fw-semibold"
            >
              <NavDropdown.Item href="#action/3.1">Uomo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Donna</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bambino</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Accessori"
              id="basic-nav-dropdown"
              className="fw-semibold"
            >
              <NavDropdown.Item href="#action/3.1">Uomo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Donna</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bambino</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default OneNavbar;
