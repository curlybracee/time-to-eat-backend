const express = require('express');
const { createUser, signInUser } = require('../controllers/user.signup');
const { check } = require('express-validator');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middlewares/validations/user');
const { isAuth } = require('../middlewares/auth');

const router = express.Router()

router.post("/create-user", validateUserSignUp, userValidation, createUser)
router.post("/sign-in", validateUserSignIn, signInUser)
router.get("/profile", isAuth, (req, res) => {
    res.send('welcome')
})
module.exports = router;
