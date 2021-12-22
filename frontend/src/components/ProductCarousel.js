import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productAction";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <section class="slider_section">
        <div class="slider_bg_box">
          <img src="images/slider-bg.jpg" alt="" />
        </div>
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            {products.map((product, index) => (
              <div class={`carousel-item ${index === 1 && `active`} `}>
                <div class="container ">
                  <div class="row">
                    <div class="col-md-7 col-lg-6 ">
                      <img src={product.image} className="custom-img" />

                      <div class="detail-box">
                        <h1>
                          <span>{product.name}</span>
                        </h1>
                        <h2>
                          <del>Was: ksh {product.discountPrice > 0 &&  product.price} </del>
                          <br />
                          Now{" "}
                          {product.discountPrice > 0
                            ? product.discountPrice
                            : product.price}
                        </h2>

                        <div class="btn-box">
                          <Link to={`/product/${product._id}`} class="btn1">
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="container">
            <ol class="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCarousel;
