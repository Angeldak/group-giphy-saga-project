const express = require("express");
require('dotenv').config();

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const favoriteRouter = require("./routes/favorite.router");
const categoryRouter = require("./routes/category.router");
const searchRouter = require("./routes/search.router");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("build"));

// Routes
app.use("/api/favorite", favoriteRouter);
app.use("/api/category", categoryRouter);
app.use("/api/search", searchRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
