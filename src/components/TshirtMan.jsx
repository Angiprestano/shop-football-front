import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTshirtMan } from "../Redux/action";
import { useEffect } from "react";

const TshirtMan = () => {
  const token = useSelector((state) => state.token);
  const TshirtMan = useSelector((state) => state.TshirtMan);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getTshirtMan(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  return (
    <div>
      <h3>Magliette per uomo</h3>
      {TshirtMan && TshirtMan.length > 0 ? (
        TshirtMan((Products, index) => (
          <Card key={index} style={{ width: "18rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src={Products.image} alt={Products.title} />
            <Card.Body>
              <Card.Title>{Products.title}</Card.Title>
              <Card.Text>{Products.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Categorie: {Products.categories}</ListGroup.Item>
              <ListGroup.Item>Prezzo: {Products.price}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))
      ) : (
        <p>Nessuna maglietta disponibile al momento.</p>
      )}
    </div>
  );
};
export default TshirtMan;
