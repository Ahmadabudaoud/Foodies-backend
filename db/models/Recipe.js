const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(Recipe, {
    source: ["name"],
  });
  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.Ingredient, {
      through: "recipeIngredients",
      foreignKey: "recipeId",
      as: "ingredients",
    });
  };

  return Recipe;
};
