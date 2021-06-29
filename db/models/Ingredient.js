const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient", {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.STRING,
      // validate: {
      //   isUrl: true,
      // },
    },
  });

  SequelizeSlugify.slugifyModel(Ingredient, {
    source: ["name"],
  });
  Ingredient.associate = (models) => {
    models.Category.hasMany(Ingredient, {
      foreignKey: "categoryId",
      as: "ingredients",
    });
    Ingredient.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });
    Ingredient.belongsToMany(models.Recipe, {
      through: "recipeIngredients",
      foreignKey: "ingredientId",
      as: "recipes",
    });
  };

  return Ingredient;
};
