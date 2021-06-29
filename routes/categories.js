const express = require("express");

const {
  getCategories,
  createCategory,
  fetchCategory,
} = require("../controllers/categoriesController");

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

router.post("/", createCategory);
router.get("/", getCategories);

module.exports = router;
