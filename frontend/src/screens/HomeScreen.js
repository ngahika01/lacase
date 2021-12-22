import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "./../components/Product";
import { listProducts } from "../actions/productAction";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading, error, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-warning">
          Go Back
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <section class="product_section layout_padding">
            <div class="container">
              <div class="heading_container heading_center">
                <h2>
                  Our <span>products</span>
                </h2>
              </div>
              <div class="row">
                {products.map((product) => (
                  <div class="col-sm-6 col-md-4 col-lg-4">
                    <Product product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
         
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
