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
            src="https://store.inter.it/on/demandware.static/-/Sites-inter-storefront-catalog-it/default/dw7cf90c59/BANNER_PAGE_DESKTOP_03.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Library-Sites-InterSharedLibrary/default/dw057a8701/images/slider/SUPERCOPPA_2024/LANDING_DESK_SUPERCOPPA.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://store.inter.it/on/demandware.static/-/Sites-inter-storefront-catalog-it/default/dwacfbd6df/BANNER_PAGE_DESKTOP_04.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://intermilan.bynder.com/m/36ac0d1150990a0c/webimage-Header_Sito_News.png"
            alt="Third slide"
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
            src="https://store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Library-Sites-InterSharedLibrary/default/dw55492adc/images/slider/CNY_2024/DESK_CNY_3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="bg bg-body-secondary">
        <Link to="/suitMan" style={{ textDecoration: "none" }}>
          <h4 className=" mt-4 pt-4 mb-3 mb-2 mt-3 text-center text-black">
            Tute uomo
          </h4>
        </Link>
        <Container>
          <Carousel>
            {suitMan ? (
              chunkArray(suitMan, 5).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between  align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 ms-2 custom-card"
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
          <h4 className="pt-3 mb-2 mb-3 text-center text-black">Accessori</h4>
        </Link>
        <Container>
          <Carousel>
            {accessories ? (
              chunkArray(accessories, 6).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between  align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card mx-4 mt-2 ms-2"
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
          <h4 className="pt-3 mb-2 mb-3 text-center text-black">
            Magliette Uomo
          </h4>
        </Link>
        <Container>
          <Carousel>
            {tshirtMan ? (
              chunkArray(tshirtMan, 6).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card mx-4 mt-2 ms-2"
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
          <h4 className="mt-4 pt-2 text-center mb-4 text-black">Felpe uomo</h4>
        </Link>
        <Container>
          <Carousel>
            {sweatshirtMan ? (
              chunkArray(sweatshirtMan, 5).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between  align-items-center">
                    {chunk.map((product, idx) => (
                      <Card
                        key={idx}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card mb-4 mx-3"
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
          <h4 className="mt-4 pt-2 text-center mb-4 text-black">
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
                        className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card mb-4 mx-3"
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
      <Container className="bg bg-black text-white">
        <div>
          <img src="" alt="" />
        </div>
        <Nav className="">
          <div className="d-flex flex-row ms-4 ps-5 mt-4">
            <span className="d-flex flex-column ms-4 ps-4">
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
        </Nav>
      </Container>
    </div>
  );
};

export default Homepage;
