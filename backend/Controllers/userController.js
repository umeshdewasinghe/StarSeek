const User = require("../Models/userModel");
const generateToken = require("../Utils/generateToken");

// Authenticate user
const authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body; 
    
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);

      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

// Register a new user
const registerUser = async (req, res, next) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Check if the user with the provided email already exists
    const userExists = await User.findOne({ email }); 
    if (userExists) {
      res.status(400);
      throw new Error("User already exists with this email");
    }

    // Create a new user
    const user = await User.create({
      name,
      email,
      mobile,
      password,
    });

    if (user) {
      // Generate token for the newly registered user
      generateToken(res, user._id); 

      // Send response with user data
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    next(error); 
  }
};

// Logout user
const logoutUser = async (req, res) => {
  res.clearCookie("token"); 
  res.status(200).json({ message: "User logged out" });
};

// Get user by ID
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update user by ID
const updateUser = async (req, res, next) => {
  try {
    const { name, email, mobile, password } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.mobile = mobile || user.mobile;
    user.password = password || user.password;

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Delete user by ID
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
  updateUser,
  deleteUser,
};
