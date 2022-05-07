import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  //context cartState
  const {
    state: { cart },
    dispatch,
  } = CartState();

  //css import
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" style={{ position: "sticky" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Shopping Cart
            </Link>
          </Typography>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ShoppingCartIcon style={{ marginRight: 8 }} />
              <span className="badge bg-dark">{cart.length}</span>
            </button>
            <div className="dropdown-menu">
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <div class="card" style={{ width: "18rem" }}>
                      <img src={prod.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{prod.name}</h5>
                        <p class="card-text">${prod.price}</p>
                        <DeleteIcon
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </div>
                    </div>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <p style={{ textAlign: "center" }}>
                  Cart is Empty!Purchase Some
                </p>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
