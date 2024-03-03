import {
  Button,
  Card,
  Carousel,
  Container,
  ListGroup,
  Nav,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProductToCart,
  getAccessories,
  getSuitMan,
  getSweatshirtMan,
  getTshirtKids,
  getTshirtMan,
} from "../../Redux/action";
import { useEffect } from "react";
import {
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
  SiSimplenote,
  SiSingaporeairlines,
} from "react-icons/si";
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
import { SiQatarairways } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Homepage = () => {
  const token = useSelector((state) => state.token);
  const suitMan = useSelector((state) => state.suitMan);
  const dispatch = useDispatch();
  const accessories = useSelector((state) => state.accessories);
  const sweatshirtMan = useSelector((state) => state.sweatshirtMan);
  const tshirtKids = useSelector((state) => state.tshirtKids);
  const tshirtMan = useSelector((state) => state.tshirtMan);

  useEffect(() => {
    if (token) {
      dispatch(getSuitMan(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getAccessories(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getSweatshirtMan(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getTshirtMan(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getTshirtKids(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="custom-carousel-container">
      <Carousel fade className="carouselImage">
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="//store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Library-Sites-InterSharedLibrary/default/dw86e8485f/images/slider/THIRD-KIT-23-24/BANNER_PAGE_DESKTOP_THIRD_KIT.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Library-Sites-InterSharedLibrary/default/dw7357b861/images/CONCORSO_INTER_NAPOLI/GLOBAL_LANDING_DESKTOP_Promo-Contest_Inter-Napoli_ENG.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Library-Sites-InterSharedLibrary/default/dw31c57575/images/slider/INTER-X-24BOTTLES/BANNER_PAGE_DESKTOP24.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Library-Sites-InterSharedLibrary/default/dw4242ccf0/images/slider/EVERYDAY_COLLECTION/LANDING_DESKTOP_EVERY2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Library-Sites-InterSharedLibrary/default/dwcf40110b/images/slider/MAGGIO_GIUGNO_23/LANDING_DESKTOP_RUBBER.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://store.inter.it/on/demandware.static/-/Sites-inter-storefront-catalog-it/default/dw86b7668a/category_banner/BANNER_PAGE_DESKTOP_05ucl.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://store.inter.it/on/demandware.static/-/Sites-inter-storefront-catalog-it/default/dw7cf90c59/BANNER_PAGE_DESKTOP_03.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="bg bg-body-secondary">
        <Link to="/suitMan" style={{ textDecoration: "none" }}>
          <h4 className=" mt-4 pt-4 mb-3 mb-2 mt-3 text-center text-black textStyle">
            Tute uomo
          </h4>
        </Link>
        <Container>
          <Carousel>
            {suitMan ? (
              chunkArray(suitMan, 5).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 ms-2 mx-3 custom-card textStyle"
                      >
                        <Card.Img
                          className="mt-3 ms-5"
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{
                            height: "180px",
                            width: "220px",
                            objectFit: "cover",
                          }}
                        />
                        <Card.Body className="ms-3">
                          <Card.Title className="custom-card-title">
                            {product.title}
                          </Card.Title>
                          <ListGroup.Item className="custom-card-text">
                            Prezzo: €{product.price.toFixed(2)}
                          </ListGroup.Item>
                          <Button
                            className="mt-2 mb-1"
                            onClick={() => handleAddToCart(product)}
                            variant="bg bg-primary-subtle"
                          >
                            Aggiungi al carrello
                          </Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush"></ListGroup>
                      </Card>
                    ))}
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <p>Caricamento in corso...</p>
              </Carousel.Item>
            )}
          </Carousel>
        </Container>
        {/* 2)ROWCAROUSEL  */}

        <Link to="/accessories" style={{ textDecoration: "none" }}>
          <h4 className="pt-3 mb-2 mb-3 text-center text-black textStyle">
            Accessori
          </h4>
        </Link>
        <Container>
          <Carousel>
            {accessories ? (
              chunkArray(accessories, 6).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card mx-4 mt-2 ms-2 textStyle"
                      >
                        <Card.Img
                          className="ms-5"
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{
                            height: "210px",
                            width: "210px",
                          }}
                        />
                        <Card.Body>
                          <Card.Title className="custom-card-title">
                            {product.title}
                          </Card.Title>
                          <ListGroup.Item className="custom-card-text">
                            Prezzo: €{product.price.toFixed(2)}
                          </ListGroup.Item>
                          <Button
                            className="mt-2 mb-1"
                            onClick={() => handleAddToCart(product)}
                            variant="bg bg-primary-subtle"
                          >
                            Aggiungi al carrello
                          </Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush"></ListGroup>
                      </Card>
                    ))}
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <p>Caricamento in corso...</p>
              </Carousel.Item>
            )}
          </Carousel>
        </Container>

        <Link to="/accessories" style={{ textDecoration: "none" }}>
          <h4 className="pt-3 mb-2 mb-3 text-center text-black textStyle">
            Magliette Uomo
          </h4>
        </Link>
        <Container>
          <Carousel>
            {tshirtMan ? (
              chunkArray(tshirtMan, 5).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card mx-4 mt-2 ms-2 textStyle"
                      >
                        <Card.Img
                          className="ms-5"
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{
                            height: "210px",
                            width: "210px",
                          }}
                        />
                        <Card.Body>
                          <Card.Title className="custom-card-title">
                            {product.title}
                          </Card.Title>
                          <ListGroup.Item className="custom-card-text">
                            Prezzo: €{product.price.toFixed(2)}
                          </ListGroup.Item>
                          <Button
                            className="mt-2 mb-1 bg bg-primary-subtle border border-0 text-black"
                            onClick={() => handleAddToCart(product)}
                          >
                            Aggiungi al carrello
                          </Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush"></ListGroup>
                      </Card>
                    ))}
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <p>Caricamento in corso...</p>
              </Carousel.Item>
            )}
          </Carousel>
        </Container>

        <Link to="/sweatshirtMan" style={{ textDecoration: "none" }}>
          <h4 className="mt-4 pt-2 text-center mb-4 text-black textStyle">
            Felpe uomo
          </h4>
        </Link>
        <Container>
          <Carousel>
            {sweatshirtMan ? (
              chunkArray(sweatshirtMan, 5).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card mb-4 mx-3 textStyle"
                      >
                        <Card.Img
                          className="mt-1"
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{ height: "180px", objectFit: "cover" }}
                        />
                        <Card.Body>
                          <Card.Title className="custom-card-title">
                            {product.title}
                          </Card.Title>
                          <ListGroup.Item className="custom-card-text">
                            Prezzo: €{product.price.toFixed(2)}
                          </ListGroup.Item>
                          <Button
                            className="mt-2 mb-1"
                            onClick={() => handleAddToCart(product)}
                            variant="bg bg-primary-subtle"
                          >
                            Aggiungi al carrello
                          </Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush"></ListGroup>
                      </Card>
                    ))}
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <p>Caricamento in corso...</p>
              </Carousel.Item>
            )}
          </Carousel>
        </Container>

        <Link to="/tshirtKids" style={{ textDecoration: "none" }}>
          <h4 className="mt-4 pt-2 text-center mb-4 text-black textStyle">
            Magliette bambino
          </h4>
        </Link>
        <Container>
          <Carousel>
            {tshirtKids ? (
              chunkArray(tshirtKids, 5).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card mb-5 mx-3 textStyle"
                      >
                        <Card.Img
                          className="mt-1"
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{ height: "180px", objectFit: "cover" }}
                        />
                        <Card.Body>
                          <Card.Title className="custom-card-title">
                            {product.title}
                          </Card.Title>
                          <ListGroup.Item className="custom-card-text">
                            Prezzo: €{product.price.toFixed(2)}
                          </ListGroup.Item>
                          <Button
                            className="mt-2 mb-1 custom-button"
                            onClick={() => handleAddToCart(product)}
                            variant="bg bg-primary-subtle"
                          >
                            Aggiungi al carrello
                          </Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush"></ListGroup>
                      </Card>
                    ))}
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <p>Caricamento in corso...</p>
              </Carousel.Item>
            )}
          </Carousel>
        </Container>
      </div>

      <Container
        fluid
        className="footerInter bg bg-black text-white pt-3 ms-0 me-0"
      >
        <div className="sponsor d-flex flex-wrap justify-content-center justify-content-sm-start">
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

          <div className="icons d-flex justify-content-center justify-content-md-center justify-content-sm-start align-items-center flex-wrap mt-3 mt-md-0 ">
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
            <div className="cart d-flex flex-row justify-content-md-center justify-content-sm-start">
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
          <hr className="s"></hr>
          <div className="cookie text-center text-sm-start mt-3 mt-md-0">
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

export default Homepage;
