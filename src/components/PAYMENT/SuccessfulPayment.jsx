import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SuccessfulPayment = () => {
  const navigate = useNavigate();
  return (
    <Container id="container-pricing" fluid>
      <Row>
        <Col>
          <div className="d-flex flex-column align-items-center justify-content-center mt-5 fs-lg-3">
            <p>
              <strong>Congratulazioni!</strong>
            </p>
            <p>
              <em>Il tuo pagamento è stato effettuato con successo!</em>
            </p>
            <div
              className="fs-6 fw-bold  rounded-5 px-4 py-2 cursor"
              onClick={() => {
                navigate("/homepage");
              }}
            >
              Homepage
            </div>
          </div>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <img
            src="/images/successful-payment.jpg"
            className="w-25 rounded-4 mt-5"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessfulPayment;
