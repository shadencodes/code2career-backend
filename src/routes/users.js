const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const auth = require('../middleware/auth');

// @route   POST /users/register
// @desc    Register a user
// @access  Public
router.post(
    '/register',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    registerUser
);

// @route   POST /users/login
// @desc    Login a user
// @access  Public
router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    loginUser
);

// @route   GET /users/profile
// @desc    Get logged-in user's profile
// @access  Private
router.get('/profile', auth, getUserProfile);

// @route   PUT /users/profile
// @desc    Update logged-in user's profile
// @access  Private
router.put('/profile', auth, updateUserProfile);

module.exports = router;
