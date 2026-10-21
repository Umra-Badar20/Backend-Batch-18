import express from "express";
import {createProduct } from "../controllers/product.controller.js";
const router = express.Router();
// /api/auth/register
router.post("/create", createProduct);

export default router;