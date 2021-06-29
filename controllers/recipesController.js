const { Recipe, Ingredient } = require("../db/models");

exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Ingredient,
        as: "ingredients",
        attributes: ["id", "name", "image"],
      },
    });
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

exports.createRecipe = async (req, res, next) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
