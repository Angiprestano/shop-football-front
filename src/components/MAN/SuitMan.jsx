import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, getSuitMan } from "../../Redux/action";
import { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Nav,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Facebook,
  Instagram,
  Linkedin,
  Snapchat,
  Telegram,
  Tiktok,
  Twitch,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";
import { BsTwitterX } from "react-icons/bs";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaEbay,
  FaGooglePay,
} from "react-icons/fa";
import {
  SiAdidas,
  SiCloud66,
  SiCodesignal,
  SiIveco,
  SiJordan,
  SiLogitech,
  SiMaserati,
  SiMercedes,
  SiMetro,
  SiMicrosoft,
  SiMicrosoftazure,
  SiMicrosoftbing,
  SiNdr,
  SiNear,
  SiNike,
  SiNrwl,
  SiPuma,
  SiQatarairways,
  SiSimplenote,
  SiSingaporeairlines,
} from "react-icons/si";

const SuitMan = () => {
  const token = useSelector((state) => state.token);
  const suitMan = useSelector((state) => state.suitMan);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getSuitMan(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="">
      <h4 className="text-center pt-2 mb-4 text-center ">Tute</h4>
      <Link
        to="#"
        onClick={handleGoBack}
        style={{ position: "absolute", left: "10px", top: "10px" }}
        className="text-black"
      >
        <ArrowLeft size={20} />
      </Link>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={5} className="g-4">
          {suitMan ? (
            suitMan.map((product, index) => (
              <Col md={3} key={index}>
                <Card
                  className="text-truncate animationCard"
                  style={{ width: "15rem", marginBottom: "20px" }}
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="text-decoration-none text-black "
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body className="custom-card-body">
                      <Card.Title className="custom-card-title">
                        {product.title}
                      </Card.Title>
                      <Card.Text className="custom-card-text">
                        {product.description}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Prezzo: €{product.price.toFixed(2)}
                      </ListGroup.Item>

                      <ListGroup.Item>Colore:{product.color}</ListGroup.Item>

                      <ListGroup.Item>Taglia: {product.size}</ListGroup.Item>

                      <ListGroup.Item>
                        Categoria: {product.categories}
                      </ListGroup.Item>

                      <ListGroup.Item>
                        Tipo di prodotto: {product.typeofProduct}
                      </ListGroup.Item>
                    </ListGroup>
                  </Link>
                  <Button
                    className="ms-4 me-4 mt-2 mb-2 text-black border border-black bg bg-body-secondary custom-button"
                    onClick={() => {
                      dispatch({
                        type: ActionTypes.ADD_CART,
                        payload: product,
                      });
                    }}
                  >
                    Aggiungi al carrello
                  </Button>
                </Card>
              </Col>
            ))
          ) : (
            <p>Caricamento in corso...</p>
          )}
        </Row>
      </Container>
      <Container
        fluid
        className="footerInter bg bg-black text-white pt-3 ms-0 me-0"
      >
        <div className="sponsor  d-flex flex-wrap justify-content-center">
          <SiNike />
          <FaEbay className="ms-4" />
          <SiQatarairways className="ms-4 mb-1" />
          <SiAdidas className="ms-4" />
          <SiCloud66 className="ms-4" />
          <SiCodesignal className="ms-4" />
          <SiIveco className="ms-4" />
          <SiMercedes className="ms-4" />
          <SiMicrosoftbing className="ms-4" />
          <SiMicrosoftazure className="ms-4" />
          <SiMetro className="ms-4" />
          <SiLogitech className="ms-4" />
          <SiNdr className="ms-4 mb-2" />
          <SiNear className="ms-4" />
          <SiSingaporeairlines className="ms-4" />
          <SiNrwl className="ms-4" />
          <SiSimplenote className="ms-4" />
          <SiPuma className="ms-4" />
          <SiJordan className="ms-4" />
          <SiMaserati className="ms-4" />
          <SiMicrosoft className="ms-4" />
        </div>

        <Nav className="d-flex flex-column flex-md-row justify-content-around">
          <div className="textStyle d-flex flex-row mt-4 mt-3">
            <span className="d-flex flex-column ms-4 ">
              <h5>SHOPPING</h5>
              <p>Acquisti online</p>
              <p>Metodi di pagamento</p>
              <p>My Account</p>
              <p>Gift Card</p>
              <p>WishList</p>
              <p>Sconto Studenti</p>
            </span>
            <span className="d-flex flex-column ms-4 ps-4">
              <h5>HELP</h5>
              <p>Contattaci</p>
              <p>FAQ</p>
              <p>Traccia ordini e resi</p>
              <p>Spedizioni</p>
              <p>Resi e rimborsi</p>
              <p>Guida alle taglie</p>
            </span>
            <span className="d-flex flex-column ms-4 ps-4 ">
              <h5>AREA LEGALE</h5>
              <p>Termini e Condizioni di Acquisto</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </span>
            <span className="d-flex flex-column ms-4 ps-4 ">
              <h5>STORES</h5>
              <p>Inter Store Milano</p>
              <p>Inter Store San Siro </p>
              <p>Inter Store Castello</p>
            </span>
          </div>

          <hr className="my-4 d-md-none"></hr>

          <div className="icons d-flex justify-content-center justify-content-md-end align-items-center flex-wrap mt-3 mt-md-0 ">
            <Telegram className="me-3" />
            <Linkedin className="me-3" />
            <Tiktok className="me-3" />
            <Youtube className="me-3" />
            <Twitch className="me-3" />
            <Instagram className="me-3" />
            <Snapchat className="me-3" />
            <Facebook className="me-3" />
            <Whatsapp className="me-3" />
            <BsTwitterX />
            <div className="cart d-flex flex-row">
              <FaCcPaypal className="me-4" />
              <FaCcMastercard className="me-4" />
              <FaCcAmazonPay className="me-4" />
              <FaCcApplePay className="me-4" />
              <FaCcVisa className="me-4" />
              <FaCcAmazonPay className="me-4" />
              <FaGooglePay className="me-4" />
              <FaCcJcb className="me-4" />
            </div>
          </div>
          <hr className="my-4 d-md-none"></hr>
          <div className="cookie text-center text-md-start">
            <h6>IMPOSTAZIONI COOKIE</h6>
            <p>
              Copyright © 1995-2022 F.C. Internazionale Milano P.IVA 04231750151
            </p>
          </div>
        </Nav>
      </Container>
    </div>
  );
};
export default SuitMan;
