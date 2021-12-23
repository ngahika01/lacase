import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateAllOrders } from "../actions/orderActions";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { ORDER_UPDATE_ALL_RESET } from "../constants/orderConstants";

const UpdateOrder = ({ match, history }) => {
  const [paid, setPaid] = useState(false);
  const [message, setMessage] = useState(null);
  const [delivered, setDelivered] = useState(false);

  const dispatch = useDispatch();
  const orderPayAll = useSelector((state) => state.orderPayAll);
  const { error, success } = orderPayAll;
  useEffect(() => {
    if (success) {
      dispatch({type: ORDER_UPDATE_ALL_RESET})
      history.push("/admin/orderlist");
    }
  }, [success, history]);
  console.log(match.params.id);
  const updateOrder = (e) => {
    e.preventDefault();
    dispatch(updateAllOrders(match.params.id));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Update Order</h1>

          <FormContainer>
            <h1>Edit User</h1>
            <Form onSubmit={updateOrder}>
              <Form.Group controlId="paid">
                <Form.Check
                  type="checkbox"
                  label="Is Paid"
                  checked={paid}
                  onChange={(e) => setPaid(e.target.checked)}
                ></Form.Check>
              </Form.Group>
              <Form.Group controlId="is Delivered">
                <Form.Check
                  type="checkbox"
                  label="Is Delivered"
                  checked={delivered}
                  onChange={(e) => setDelivered(e.target.checked)}
                ></Form.Check>
              </Form.Group>

              <Button type="submit" variant="primary">
                Update
              </Button>
            </Form>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrder;
