import express from "express";

import {
  getAllSupplier,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "./../controllers/supplierController.js";

const router = express.Router();

router.get("/", getAllSupplier);
router.get("/:id", getSupplierById);
router.post("/create", createSupplier);
router.put("/update/:id", updateSupplier);
router.delete("/delete/:id", deleteSupplier);

export default router;
