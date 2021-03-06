const express = require("express");
const cors = require("cors");
const categoriesRoutes = require("./routes/categories");
const ingredientsRoutes = require("./routes/ingredients");
const recipesRoutes = require("./routes/recipes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/categories", categoriesRoutes);
app.use("/ingredients", ingredientsRoutes);
app.use("/media", express.static("media"));
app.use("/recipes", recipesRoutes);

app.listen(8000);
