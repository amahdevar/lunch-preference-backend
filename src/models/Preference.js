const mongoose = require("mongoose");

const PreferenceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true },
  choice: { type: String, enum: ["option1", "option2"], required: true },
});

module.exports = mongoose.model("Preference", PreferenceSchema);
