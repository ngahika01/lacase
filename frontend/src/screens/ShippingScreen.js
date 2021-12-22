import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { useHistory } from "react-router";
const ShippingScreen = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress.address);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address }));
    history.push("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Delivery Address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="danger">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
