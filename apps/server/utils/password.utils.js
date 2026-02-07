
  // server/utils/password.utils.js
  const bcrypt = require('bcryptjs');
  const { bcryptRounds } = require('../config/auth.config');
  
  /**
   * Hash password
   */
  const hashPassword = async (password) => {
    return await bcrypt.hash(password, bcryptRounds);
  };
  
  /**
   * Compare password with hash
   */
  const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
  };
  
  module.exports = {
    hashPassword,
    comparePassword,
  };