import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listOrders } from "../actions/orderActions";
const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, userInfo, history]);

  return (
    <>
      <h1> {orders && orders.length} Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id} </td>
                <td> {order.user && order.user.name} </td>

                <td>{order.createdAt.substring(0, 10)} </td>
                <td> ${order.totalPrice} </td>

                <td>
                  {order.isPaid ? (
                    moment(order.paidAt).format("MMM Do YY")
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}{" "}
                </td>

                <td>
                  {order.isDelivered ? (
                    moment(order.deliveredAt).format("MMM Do YY")
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}{" "}
                </td>
                <td>
                  <td>
                    <LinkContainer to={`/productupdate/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        {" "}
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
