import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.ts";  
import userRoute from "./routes/userRoutes.ts";   
import authRoute from "./routes/authRoutes.ts";
import {} from "./middlewares/authMiddleware.ts"

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users",  userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});