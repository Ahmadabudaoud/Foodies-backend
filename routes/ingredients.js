const express = require("express");
const {
  getIngredients,
  createIngredient,
} = require("../controllers/ingredientsController");

const router = express.Router();
router.get("/", getIngredients);
router.post("/", createIngredient);
module.exports = router;
