const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

async function requireSignIn(req, res, next) {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (err) {
    console.log(err);
  }
}

// admin access
async function isAdmin(req, res, next) {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access.",
      });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  requireSignIn,
  isAdmin,
};
