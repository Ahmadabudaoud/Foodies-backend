const { Category, Ingredient } = require("../db/models/");

exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Ingredient,
        as: "ingredients",
        attributes: ["id"],
      },
    });

    res.json(categories);
  } catch (error) {
    next(error);
  }
};

exports.fetchCategory = async (categoryId, next) => {
  try {
    const foundCategory = await Category.findByPk(categoryId);
    return foundCategory;
  } catch (error) {
    next(error);
  }
};
