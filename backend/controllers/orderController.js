import AsyncHandler from "express-async-handler";
import Order from "..//models/orderModel.js";
import { Mpesa } from "mpesa-api";
//Lipa na mpesa
const lipaNaMpesa = AsyncHandler(async (req, res) => {
  const environment = "sandbox";
  const credentials = {
    clientKey: process.env.CONSUMER_KEY,
    clientSecret: process.env.CONSUMER_SECRET,
    initiatorPassword: "Safaricom998!",
  };
  const mpesa = new Mpesa(credentials, environment);
  const { amount } = req.body;
  // phone number and party A

  try {
    const response = await mpesa.lipaNaMpesaOnline({
      BusinessShortCode: 174379,
      Amount: amount /* 1000 is an example amount */,
      PartyA: 254729842998,
      PhoneNumber: 254729842998,
      PartyB: 174379,
      CallBackURL: "https://developer.safaricom.co.ke/",
      AccountReference: "LA CASA DEL LIQOUR",
      passKey: process.env.PASS_KEY,
      TransactionType: "CustomerPayBillOnline",
    });

    res.json(response);
  } catch (error) {
    console.log(error);
  }
});
const queryStatus = AsyncHandler(async (req, res) => {
  const environment = "sandbox";
  const credentials = {
    clientKey: process.env.CONSUMER_KEY,
    clientSecret: process.env.CONSUMER_SECRET,
    initiatorPassword: "Safaricom998!",
  };
  const mpesa = new Mpesa(credentials, environment);

  const { checkoutRequestID } = req.body;

  try {
    const result = await mpesa.lipaNaMpesaQuery({
      BusinessShortCode: 174379,
      CheckoutRequestID: checkoutRequestID,
      passKey: process.env.PASS_KEY,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

// @desc create new Orer
//@route post /api/orders
//@access private
const addOrderItems = AsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order Items");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});
// @desc get order by id
//@route GET /api/orders/:id
//@access private
const getOrderById = AsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc Update order to paid
//@route GET /api/orders/:id/pay
//@access private
const updateOrderToPaid = AsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc Update order to delivered
//@route GET /api/orders/:id/deliver
//@access private/Admin
const updateOrderToDelivered = AsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc get logged in user orders
//@route GET /api/orders/myorders
//@access private
const getMyOrders = AsyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc get all orders
//@route GET /api/orders/orders
//@access private/Admin
const getOrders = AsyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name");
  res.json(orders);
});
export {
  getOrders,
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  updateOrderToDelivered,
  lipaNaMpesa,
  queryStatus,
};
