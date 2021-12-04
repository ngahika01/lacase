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

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <div className="mpsa">
              <Form.Check
                type="radio"
                label="Mpesa"
                id="mpesa"
                name="paymentMethod"
                value="mpesa"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <Image
                className="w-50"
                src={
                  "https://hapakenya.com/wp-content/uploads/2019/06/lipa-na-mpesa-paybill.png"
                }
              />
            </div>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
