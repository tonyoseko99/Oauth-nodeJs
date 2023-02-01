// hide user password
const hidePwd = (req, res, next) => {
  // get user from request
  const user = req.user;
  // if user exists
  if (user) {
    // remove password from user
    delete user.password;
  }
  // call next middleware
  next();
};

// export the middleware
module.exports = hidePwd;
