const User = require('../models/User');

exports.getMyPage = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ username: user.username, email: user.email });
};
