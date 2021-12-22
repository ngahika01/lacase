import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <a href="#">
                   <h3 style={{ color: "red",cursor:"pointer" }}> LACASA DEL LIQOUR </h3>
                  </a>
                </div>
                <div className="information_f">
                  <p>
                    <strong>ADDRESS:</strong>  Ryoisambu, Nairobi, Kenya
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +254 793 810 040
                  </p>
                  <p>
                    <strong>EMAIL:</strong> lacasdel@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Testimonial</a>
                          </li>
                          <li>
                            <a href="#">Blog</a>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li>
                            <a href="#">Account</a>
                          </li>
                          <li>
                            <a href="#">Checkout</a>
                          </li>
                          <li>
                            <a href="#">Login</a>
                          </li>
                          <li>
                            <a href="#">Register</a>
                          </li>
                          <li>
                            <a href="#">Shopping</a>
                          </li>
                          <li>
                            <a href="#">Widget</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>
                        Subscribe by our newsletter and get update protidin.
                      </p>
                    </div>
                    <div className="form_sub">
                      <form>
                        <fieldset>
                          <div className="field">
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="cpy_">
        <p>
          {" "}
          &copy; {date.getFullYear()} All Rights Reserved By{" "}
          <a href="#">La Casa Del Liqour</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
