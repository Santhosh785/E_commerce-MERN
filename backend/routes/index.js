const express = require('express');
const router = express.Router();

const { userSignUpController } = require('../controller/userSignup');
const { userSignInController } = require('../controller/userSignin');
const { userDetailsController } = require('../controller/userDetail');
const authToken = require('../middleware/authToken');
const { userLogout } = require('../controller/userLogout');
const { allUsersControllers } = require('../controller/allUsers'); // 
const updateUser = require('../controller/updateUser');
const UploadProductController = require('../controller/uploadProduct');
const getProductController = require('../controller/getProduct');
const deleteProductController = require('../controller/deleteProduct');
const addToCartController = require('../controller/addToCartController');
const countAddToCartProduct = require('../controller/countAddToCartProduct');
const addToCartViewProduct = require('../controller/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/deleteAddToCartProduct');

const searchProduct = require('../controller/searchProduct');

router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get('/user-details', authToken, userDetailsController);
router.get('/logout', userLogout);


router.get("/all-users", authToken, allUsersControllers)
router.post("/update-user", authToken, updateUser)

//product
router.post("/upload-product", authToken, UploadProductController)
router.get("/get-product", getProductController)
router.post("/delete-product", authToken, deleteProductController)
router.post("/addtocart", authToken, addToCartController)
router.get("/countAddToCartProduct", authToken, countAddToCartProduct)
router.get("/view-card-product", authToken, addToCartViewProduct)
router.post("/update-cart-product", authToken, updateAddToCartProduct)
router.post("/delete-cart-product", authToken, deleteAddToCartProduct)
router.get("/search", searchProduct)





module.exports = router;
