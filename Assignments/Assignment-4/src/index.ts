import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import userRoutes from "./Routes/userRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import { logger } from "./Middleware/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(logger);

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
