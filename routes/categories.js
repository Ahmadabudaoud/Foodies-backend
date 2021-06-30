const express = require("express");

const {
  getCategories,
  createCategory,
  fetchCategory,
} = require("../controllers/categoriesController");
const { createIngredient } = require("../controllers/ingredientsController");
const upload = require("../middleware/multer");

const router = express.Router();
router.param("categoryId", async (req, res, next, categoryId) => {
  const category = await fetchCategory(categoryId, next);
  if (category) {
    req.category = category;
    next();
  } else {
    const err = new Error("category Not Found");
    err.status = 404;
    next(err);
  }
});

router.post(
  "/:categoryId/ingredients",
  upload.single("image"),
  createIngredient
);
router.post("/", upload.single("image"), createCategory);
router.get("/", getCategories);

module.exports = router;
