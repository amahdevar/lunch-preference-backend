const express = require("express");
const { savePreference, getPreferences } = require("../controllers/preferenceController");
const router = express.Router();

router.post("/", savePreference);
router.get("/:userId", getPreferences);

module.exports = router;
