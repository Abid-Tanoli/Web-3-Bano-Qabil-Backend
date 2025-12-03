import { Request, Response } from "express";

let books = [
  { id: 1, tittle: "Java", auther: "ABC" },
  { id: 2, tittle: "Python", auther: "XYZ" },
];

export const getBooks = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Data Fetched Successfully",
    data: books,
  });
};

export const getBookById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book)
    return res.status(404).json({ message: "Book Not Found" });

  res.status(200).json({ message: "Book Found", data: book });
};

export const createBook = (req: Request, res: Response) => {
  const { tittle, auther } = req.body;

  if (!tittle || !auther)
    return res
      .status(400)
      .json({ message: "Tittle or Auther are required" });

  const newBook = {
    id: books.length + 1,
    tittle,
    auther,
  };

  books.push(newBook);

  res.status(200).json({
    message: "Book Created Successfully",
    data: newBook,
  });
};

export const deleteBook = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = books.findIndex((b) => b.id === id);

  if (index === -1)
    return res.status(404).json({ message: "Book Not Found" });

  books.splice(index, 1);

  res.status(200).json({ message: "Book Deleted Successfully" });
};

export const updateBook = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { tittle, auther } = req.body;

  const book = books.find((b) => b.id === id);
  if (!book)
    return res.status(404).json({ message: "Book Not Found" });

  if (tittle) book.tittle = tittle;
  if (auther) book.auther = auther;

  res.status(200).json({
    message: "Book Updated Successfully",
    data: book,
  });
};
