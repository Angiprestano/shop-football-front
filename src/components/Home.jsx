import { Card, Carousel, Container, ListGroup, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAccessories, getSuitMan, getSweatshirtMan } from "../Redux/action";
import { useEffect } from "react";

const Homepage = () => {
  const token = useSelector((state) => state.token);
  const suitMan = useSelector((state) => state.suitMan);
  const dispatch = useDispatch();
  const accessories = useSelector((state) => state.accessories);
  const sweatshirtMan = useSelector((state) => state.sweatshirtMan);

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

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className="custom-carousel-container">
      <Carousel fade className="carouselImage">
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://media.licdn.com/dms/image/C4D16AQGJyeDNKvpJIg/profile-displaybackgroundimage-shrink_200_800/0/1617180061625?e=2147483647&v=beta&t=3O1Gw_Z9TMiwz7bBGHZdaXk8R6IMQjGnZwIcfLsgHEs"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://intermilan.bynder.com/m/5dc759db3fbc63fa/webimage-KAIYUN_Press-Release-2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://pbs.twimg.com/media/FFyJZBjXMAwhQAZ.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://cdn.tuttosport.com/img/990/495/2023/05/11/091833837-95e60833-3269-457f-9b18-8f6511a05c86.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://www.interclubcastellanza.it/public/news/02062023095005_ft_5421.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-carousel-image"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt876a56b5f2f44a0d/6505efc0ced20829d20b6cbd/thuramhd.png?auto=webp&format=pjpg&width=3840&quality=60"
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
          <h4 className=" mt-4 pt-4 mb-4 mt-3 text-center text-black">
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
                      <Card key={idx} className="custom-card">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{
                            height: "180px",
                            width: "190px",
                            objectFit: "cover",
                          }}
                        />
                        <Card.Body>
                          <Card.Title className="custom-card-title">
                            {product.title}
                          </Card.Title>
                          <ListGroup.Item className="custom-card-text">
                            Prezzo: €{product.price.toFixed(2)}
                          </ListGroup.Item>
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
                      <Card key={idx} className="custom-card mx-4">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{ height: "150px", objectFit: "cover" }}
                        />
                        <Card.Body>
                          <Card.Title className="custom-card-title">
                            {product.title}
                          </Card.Title>
                          <ListGroup.Item className="custom-card-text">
                            Prezzo: €{product.price.toFixed(2)}
                          </ListGroup.Item>
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
          <h4 className="mt-4 pt-2 text-center mb-4 text-black">Felpe Uomo</h4>
        </Link>
        <Container>
          <Carousel>
            {sweatshirtMan ? (
              chunkArray(sweatshirtMan, 5).map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-between  align-items-center">
                    {chunk.map((product, idx) => (
                      <Card key={idx} className="custom-card mb-4 mx-3">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{ height: "150px", objectFit: "cover" }}
                        />
                        <Card.Body>
                          <Card.Title className="custom-card-title">
                            {product.title}
                          </Card.Title>
                          <ListGroup.Item className="custom-card-text">
                            Prezzo: €{product.price.toFixed(2)}
                          </ListGroup.Item>
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
