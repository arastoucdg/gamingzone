const express = require("express");

const router = express.Router();

const controller = require("./../controllers/productController");

router.get("/list", controller.listProducts);
router.get("/search", controller.searchProducts);
module.exports = router;
