import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: " Welcome to the Online-Store Home Page",
    status: 200
  });
});

app.get("/about", (req: Request, res: Response) => {
  res.status(200).json({
    message: "About this Online-Store",
    author: "Abid Ali Tanoli",
    version: "1.0.0",
    status: 200
  });
});

app.get("/products", (req: Request, res: Response) => {
  res.status(200).json([
    { id: 1, name: "Dell Inspiron Laptop", price: 1200 },
    { id: 2, name: "Samsung Galaxy Mobile", price: 450 },
    { id: 3, name: "Sony Wireless Headphones", price: 80 }
  ]);
});

app.get("/categories", (req: Request, res: Response) => {
  res.status(200).json([
    "Electronics",
    "Clothing",
    "Shoes",
    "Home Appliances",
    "Accessories"
  ]);
});

app.get("/cart", (req: Request, res: Response) => {
  res.status(200).json({
    items: [
      { id: 1, name: "Dell Inspiron Laptop", qty: 1, price: 1200 },
      { id: 3, name: "Sony Wireless Headphones", qty: 2, price: 80 }
    ],
    total: 1360
  });
});

app.get("/orders", (req: Request, res: Response) => {
  res.status(200).json([
    { orderId: 1, amount: 2000, status: "Delivered" },
    { orderId: 2, amount: 350, status: "Processing" }
  ]);
});

app.get("/users", (req: Request, res: Response) => {
  res.status(200).json([
    { id: 1, name: "Abid Ali", email: "abid@gmail.com" },
    { id: 2, name: "Hassan", email: "hassan@gmail.com" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
