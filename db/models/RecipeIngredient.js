module.exports = (sequelize, DataTypes) => {
  const RecipeIngredient = sequelize.define("RecipeIngredient", {
    recipeId: { type: DataTypes.INTEGER },
    ingredientId: { type: DataTypes.INTEGER },
  });

  return RecipeIngredient;
};
