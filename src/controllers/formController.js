const FormData = require("../models/FormData");

exports.submitForm = async (req, res) => {
  try {
    const data = await FormData.create(req.body);
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
};
