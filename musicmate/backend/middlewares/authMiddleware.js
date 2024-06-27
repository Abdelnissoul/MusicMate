const authMiddleware = (req, res, next) => {
    // Authentication logic
    next(); // Call next middleware or route handler
  };
  
  module.exports = authMiddleware;