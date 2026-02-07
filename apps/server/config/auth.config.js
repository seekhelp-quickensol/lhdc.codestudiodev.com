// server/config/auth.config.js
module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-min-32-chars',
    jwtExpiry: '30d',
    cookieName: 'auth_token',
    cookieMaxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    bcryptRounds: 10,
    sessionDuration: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
  };
  
  // server/utils/jwt.utils.js
  