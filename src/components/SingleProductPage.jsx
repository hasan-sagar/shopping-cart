import { CartState } from "../context/Context";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const SingleProductPage = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      className={classes.root}
      style={{ width: "80vw", marginBottom: "50px", marginTop: "50px" }}
    >
      <Grid xs={5}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={product.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ${product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {cart.some((p) => p.id === product.id) ? (
              <Button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }
              >
                Add to Cart
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SingleProductPage;
