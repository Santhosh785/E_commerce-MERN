const express = require('express');
const router = express.Router();

const { userSignUpController } = require('../controller/userSignup');
const { userSignInController } = require('../controller/userSignin');
const userDetailsController = require('../controller/userDetail');
const authToken = require('../middleware/authToken');
const { userLogout } = require('../controller/userLogout');
const allUsersControllers  = require('../controller/allUsers'); // 
const updateUser = require('../controller/updateUser');

router.post('/signup', userSignUpController);   
router.post('/signin', userSignInController);   
router.get('/user-details', authToken, userDetailsController); 
router.get('/logout', userLogout);
router.get('/all-users',authToken, allUsersControllers); // 
router.post('/update-user',authToken, updateUser)





module.exports = router;
