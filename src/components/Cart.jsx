import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { CartState } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div style={{ width: "60vw", height: "50vh", marginLeft: "35rem" }}>
      <div>
        {cart.map((prod) => (
          <Row
            style={{ display: "block", justifyContent: "center" }}
            key={prod.id}
          >
            <Col md={2}>
              <Image src={prod.image} alt={prod.name} fluid rounded />
            </Col>
            <Col md={3}>
              <h2>{prod.name}</h2>
            </Col>
            <br />
            <Col md={2}>
              <h>Price : $ {prod.price}</h>
            </Col>

            <Col md={2}>
              <Button
                type="button"
                variant="light"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                <DeleteIcon fontSize="20px" />
              </Button>
            </Col>
          </Row>
        ))}
      </div>
      <hr />
      <div style={{ marginTop: "20px" }}>
        <h2 c>Total ({cart.length}) items Added To Cart</h2>
        <h3 style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</h3>
      </div>
    </div>
  );
};

export default Cart;
