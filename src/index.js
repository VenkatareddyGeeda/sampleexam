const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// Root Route
app.get("/", (req, res) => {
    res.send("Task Manager API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
