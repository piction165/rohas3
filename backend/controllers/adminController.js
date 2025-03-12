const User = require('../models/User');

exports.getPendingUsers = async (req, res) => {
  if(!['admin','manager'].includes(req.user.role))
    return res.status(403).json({ message: '권한이 없습니다.' });

  const users = await User.find({ status: 'pending' });
  res.json(users);
};

exports.approveUser = async (req, res) => {
  await User.findByIdAndUpdate(req.body.userId, { status: 'approved' });
  res.json({ message: '승인 완료!' });
};

exports.rejectUser = async (req, res) => {
  await User.findByIdAndUpdate(req.body.userId, { status: 'rejected' });
  res.json({ message: '거절 완료!' });
};
