const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');

router.get('/pending-users', authMiddleware, adminController.getPendingUsers);
router.post('/approve-user', authMiddleware, adminController.approveUser);
router.post('/reject-user', authMiddleware, adminController.rejectUser);

module.exports = router;
