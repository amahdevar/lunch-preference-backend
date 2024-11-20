const Menu = require("../models/Menu");

// Add or update a menu for a specific date
exports.addMenu = async (req, res) => {
  try {
    const { date, option1, option2 } = req.body;

    // Check if a menu already exists for this date
    let menu = await Menu.findOne({ date });
    if (menu) {
      menu.option1 = option1;
      menu.option2 = option2;
      await menu.save();
    } else {
      menu = new Menu({ date, option1, option2 });
      await menu.save();
    }

    res.status(201).json({ message: "Menu saved successfully!", menu });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get menu for a specific day or month
exports.getMenu = async (req, res) => {
  try {
    const { date, month } = req.query;

    let menu;
    if (date) {
      // Retrieve menu for a specific date
      menu = await Menu.findOne({ date });
    } else if (month) {
      // Retrieve all menus for a month (e.g., "2024-11")
      menu = await Menu.find({ date: { $regex: `^${month}` } });
    } else {
      return res.status(400).json({ error: "Please provide a date or month." });
    }

    if (!menu) return res.status(404).json({ error: "Menu not found." });

    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
