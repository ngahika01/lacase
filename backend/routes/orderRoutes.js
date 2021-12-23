import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  getOrders,
  updateOrderToDelivered,
  lipaNaMpesa,
  queryStatus,
  updateAllOrders,
} from "../controllers/orderController.js";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/mpesa").post(protect, lipaNaMpesa);
router.route("/mpesa/query").post(protect, queryStatus);
router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/updateAll/:id").put(protect, admin, updateAllOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
