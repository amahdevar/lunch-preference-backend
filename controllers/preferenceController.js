const Preference = require("../models/Preference");

// Save a user's preference for a specific date
exports.savePreference = async (req, res) => {
  try {
    const { userId, date, choice } = req.body;

    // Validate the choice
    if (!["option1", "option2"].includes(choice)) {
      return res.status(400).json({ error: "Invalid choice." });
    }

    // Check if the preference already exists for this user and date
    let preference = await Preference.findOne({ user: userId, date });
    if (preference) {
      preference.choice = choice;
      await preference.save();
    } else {
      preference = new Preference({ user: userId, date, choice });
      await preference.save();
    }

    res.status(201).json({ message: "Preference saved successfully!", preference });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all preferences for a user
exports.getPreferences = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find preferences for the user
    const preferences = await Preference.find({ user: userId });

    res.json(preferences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
