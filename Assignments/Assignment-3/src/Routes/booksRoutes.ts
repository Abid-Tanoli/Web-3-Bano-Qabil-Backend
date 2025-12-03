import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  deleteBook,
  updateBook,
} from "../Controllers/bookController";

const router = Router();

router.get("/books", getBooks);
router.get("/book/:id", getBookById);
router.post("/create", createBook);
router.delete("/delete/:id", deleteBook);
router.put("/update/:id", updateBook);

export default router;
