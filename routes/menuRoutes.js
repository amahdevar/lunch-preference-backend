const express = require("express");
const { addMenu, getMenu } = require("../controllers/menuController");
const router = express.Router();

router.post("/", addMenu);
router.get("/", getMenu);

module.exports = router;
