const { Ingredient } = require("../db/models");

exports.getIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll();
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};
