const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  logoutUser,
  getUserById,
  updateUser,
  deleteUser
} = require("../Controllers/userController");

// Route to authenticate a user
router.post("/auth", authUser);

// Route to register a new user
router.post("/register", registerUser);

// Route to logout a user
router.post("/logout", logoutUser);

// Route to get user by ID
router.get("/:id", getUserById);

// Route to update user profile
router.put("/:id", updateUser);

// Route to delete user
router.delete("/:id", deleteUser);

module.exports = router;
