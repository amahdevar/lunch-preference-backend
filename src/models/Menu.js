const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true }, // Use a date string (e.g., "YYYY-MM-DD")
  option1: { type: String, required: true },
  option2: { type: String, required: true },
});

module.exports = mongoose.model("Menu", MenuSchema);
