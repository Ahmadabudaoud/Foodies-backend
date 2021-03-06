const { Recipe, Ingredient, RecipeIngredient } = require("../db/models");

exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Ingredient,
        as: "ingredients",
        through: {
          model: RecipeIngredient,
        },
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
    const mappedIngredients = req.body.ingredients.map((ingredient) => ({
      recipeId: newRecipe.id,
      ingredientId: ingredient,
    }));
    const row = await RecipeIngredient.bulkCreate(mappedIngredients);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
