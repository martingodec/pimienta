const express = require("express");
const router = express.Router();
const detalleController = require("../controllers/detalleController")

router.get("/", detalleController.index );
router.get("/:id", detalleController.productoId);

module.exports = router;


