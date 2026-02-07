const jwt = require('jsonwebtoken');
  const { jwtSecret, jwtExpiry } = require('../config/auth.config');
  
  /**
   * Generate JWT token
   */
  const generateToken = (payload) => {
    return jwt.sign(payload, jwtSecret, {
      expiresIn: jwtExpiry,
    });
  };
  
  /**
   * Verify JWT token
   */
  const verifyToken = (token) => {
    try {
      return jwt.verify(token, jwtSecret);
    } catch (error) {
      return null;
    }
  };
  
  /**
   * Decode JWT token without verification
   */
  const decodeToken = (token) => {
    try {
      return jwt.decode(token);
    } catch (error) {
      return null;
    }
  };
  
  module.exports = {
    generateToken,
    verifyToken,
    decodeToken,
  };
  