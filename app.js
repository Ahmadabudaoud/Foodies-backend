const express = require("express");
const cors = require("cors");
const categoriesRoutes = require("./routes/categories");
const ingredientsRoutes = require("./routes/ingredients");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/categories", categoriesRoutes);
app.use("/ingredients", ingredientsRoutes);
app.listen(8000);
