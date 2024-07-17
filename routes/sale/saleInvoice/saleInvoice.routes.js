const express = require("express");
const {
  createSingleSaleInvoice,
  getAllSaleInvoice,
  getSingleSaleInvoice,
  updateSaleInvoice,
} = require("./saleInvoice.controllers");
const authorize = require("../../../utils/authorize"); // authentication middleware

const saleInvoiceRoutes = express.Router();

saleInvoiceRoutes.post(
  "/",
  authorize("createSaleInvoice"),
  createSingleSaleInvoice
);
saleInvoiceRoutes.get("/", authorize("viewSaleInvoice"), getAllSaleInvoice);
saleInvoiceRoutes.get(
  "/:id",
  authorize("viewSaleInvoice"),
  getSingleSaleInvoice
);
saleInvoiceRoutes.patch(
  "/:id", authorize('chekSaleInvoice'),
  updateSaleInvoice
);

module.exports = saleInvoiceRoutes;
