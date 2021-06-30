"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RecipeIngredients", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      recipeId: { type: Sequelize.INTEGER },
      ingredientId: { type: Sequelize.INTEGER },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("RecipeIngredients");
  },
};
