import jwt from "jsonwebtoken";
import userModel from "#models/userModel";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        success: false,
        message: "Authorization header is missing",
      });
    }

    const decodedToken = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error in requireSignIn middleware:", error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

//admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user || user.role !== 1) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Access",
      });
    }
    next();
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    return res.status(401).json({
      success: false,
      message: "Error in admin middleware",
    });
  }
};
