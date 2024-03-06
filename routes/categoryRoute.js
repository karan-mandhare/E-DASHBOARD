const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  updateCategoryController,
  getCategoryController,
  singleCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

// route

// create-category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update-category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getAll category
router.get("/get-category", getCategoryController);

// single category
router.get("/single-category/:slug", singleCategoryController);

router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController)

module.exports = router;
