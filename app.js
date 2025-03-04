const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Import Routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});