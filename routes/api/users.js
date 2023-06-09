const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get("/:id", usersCtrl.getUserById);

// POST /api/users (signUp)
router.post('/', usersCtrl.create);

// POST /api/users/login
router.post('/login', usersCtrl.login);

// GET /api/users/check-token
// Insert ensureLoggedIn on all routes that need protecting
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;