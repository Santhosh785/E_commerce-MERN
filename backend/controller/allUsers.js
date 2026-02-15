const userModel = require('../models/usermodels');

async function allUsersControllers(req, res) {
  try {
    const allUsers = await userModel.find()

    res.status(200).json({
      message: "All users fetched successfully",
      error: false,
      success: true,
      data: allUsers
    });

  } catch (error) {
    res.status(500).json({
      message: error.message || "Error fetching users",
      error: true,
      success: false,
    });
  }
}

module.exports = { allUsersControllers };
