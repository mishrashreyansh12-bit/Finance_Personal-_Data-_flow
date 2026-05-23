const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

// TEMP DEV ROUTES - remove after use
const User = require("./models/User");
app.get("/api/dev/users", async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json(users);
});
app.delete("/api/dev/user/:email", async (req, res) => {
  await User.deleteOne({ email: req.params.email.toLowerCase() });
  res.json({ message: "User deleted" });
});

// test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});