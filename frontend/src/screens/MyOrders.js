import React from "react";
import { Button, Col, Container, Row ,Table} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const MyOrders = ({history}) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderListMy = useSelector((state) => state.orderListMy);
  const { orders,error,loading } = orderListMy;

  if (!userInfo) {
    history.back();
  }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>My Orders</h2>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error} </Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders && orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id} </td>
                    <td> {order.createdAt.substring(0, 10)} </td>

                    <td>{order.totalPrice} </td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>

                    <td>
                      {order.isDeliveredAt ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}{" "}
                    </td>
                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button className="btn-sm" variant="light">
                          {" "}
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MyOrders;
