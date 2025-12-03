import express from "express";
import booksRoutes from "./Routes/booksRoutes"
import logger from "./Middleware/logger";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use("/api", booksRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
