const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

//protect route
const protect = async (req, res, next) => {
  let token;

  try {
    token = req.cookies.token; 

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token"); 
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      res.status(401);
      throw new Error("Not authorized, user not found"); 
    }
    next(); 
  } catch (error) {
    next(error); 
  }
};

// check user roles
const roleCheck = (roles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !roles.includes(req.user.role)) {
        res.status(403);
        throw new Error(`Not authorized`); 
      }
      next(); 
    } catch (error) {
      next(error); 
    }
  };
};

module.exports = {
  protect,
  roleCheck,
};