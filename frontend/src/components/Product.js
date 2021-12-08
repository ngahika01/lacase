import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  let qty = 1;
  return (
    <Card className="my-3 p-3 rounded my-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          className="card-img"
          variant="top"
        ></Card.Img>
      </Link>

      <Card.Body>
        <div className="cart"></div>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <div className="d-flex justify-content-center align-content-center">
          <Card.Text as="h4" className="mt-2">Ksh {product.price}</Card.Text>
          <Card.Text>
            <div
              onClick={() => {
                dispatch(addToCart(product._id, qty));
                alert(`${product.name} added to cart `)
              }}
            >
              <i className="fas fa-shopping-cart  cart-text"></i>
            </div>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
