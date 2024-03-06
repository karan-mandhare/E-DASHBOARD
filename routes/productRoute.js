const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  productSearchController,
  similarProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
} = require("../controllers/productController");
const formidableMiddleware = require("express-formidable");

const router = express.Router();

// routes
// create-product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidableMiddleware(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidableMiddleware(),
  updateProductController
);

// get-product
router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

// filter product
router.post("/filter-product", productFilterController);

// product count
router.get("/count-product", productCountController);

// product per page
router.get("/list-product/:page", productListController);

// search product
router.get("/search/:keyword", productSearchController);

// similar product
router.get("/similar-product/:pid/:cid", similarProductController);

// category wise product
router.get(`/product-category/:slug`, productCategoryController);

// payments route
// token
router.get("/braintree/token", braintreeTokenController);

// payment gateway api
// token
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

module.exports = router;
