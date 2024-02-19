import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../Redux/action";

const Orders = () => {
  const token = useSelector((state) => state.token);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(token));
  }, [dispatch, token]);

  return (
    <div>
      {" "}
      <h2>Your Orders</h2>
      {order.map((order) => (
        <div key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>To Pay: {order.toPay}</p>
          <p>
            User: {order.user.name} {order.user.surname}
          </p>
          <p>Email: {order.user.email}</p>
          <p>Address: {order.user.address}</p>
          <h4>Details:</h4>
          {order.detailsProduct.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>Title: {product.title}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <p>Color: {product.color}</p>
              <p>Size: {product.size}</p>
              <p>Category: {product.categories}</p>
              <p>Type: {product.typeofProduct}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;
