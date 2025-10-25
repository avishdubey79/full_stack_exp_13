require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/products", productRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(🚀 Server running on port ${PORT}));
