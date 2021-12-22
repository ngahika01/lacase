import React, { useState } from "react";
import { Form, Button, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    if (paymentMethod === "payOnDelivery") {
      history.push("/placeorder");
    }
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <div className="form-group">
              <button
                value={"mpesa"}
                className="badge badge-success"
                onClick={(e) => {
                  setPaymentMethod("mpesa");
                  alert("Comin soon");
                }}
              >
                Mpesa{" "}
              </button>
              <button
                id="payOnDelivery"
                value="payOnDelivery"
                className="badge badge-primary m-4"
                onClick={(e) => {
                  setPaymentMethod("payOnDelivery");
                }}
              >
                payOnDelivery{" "}
              </button>
            </div>
          </Col>
        </Form.Group>
        <button type="submit" className="btn btn-danger">
          Continue
        </button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
