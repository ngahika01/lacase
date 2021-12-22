import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
const Product = ({ product, history }) => {
  const dispatch = useDispatch();
  let qty = 1;
  return (
    <>
      <div class="box">
        <div class="option_container">
          <div class="options">
            <Link
              to="/"
              onClick={() => dispatch(addToCart(product._id, qty))}
              class="option1"
            >
              Add to cart
            </Link>
            <Link to={`/product/${product._id}`} className="option2">
              Buy Now
            </Link>
          </div>
        </div>
        <div class="img-box">
          <img src={product.image} alt="" />
        </div>
        <div class="detail-box">
          <h5>{product.name}</h5>
          <h6>
            {product.discountPrice > 0 ? (
              <div> Now : Ksh <br/>  {product.discountPrice} </div>
            ) : (
              <div>  Ksh {product.price} </div>
            )}
          </h6>
          <del>
            {" "}
            {product.discountPrice > 0 && <span>Was: {product.price}</span>}
          </del>
        </div>
      </div>
      {/* <Card className="my-3 p-3 rounded my-card">
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
            <Card.Text as="h4" className="mt-2">
              Ksh {product.price}
            </Card.Text>
            <Card.Text>
              <div
                onClick={() => {
                  dispatch(addToCart(product._id, qty));
                  alert(`${product.name} added to cart `);
                }}
              >
                <i className="fas fa-shopping-cart  cart-text"></i>
              </div>
            </Card.Text>
          </div>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default Product;
