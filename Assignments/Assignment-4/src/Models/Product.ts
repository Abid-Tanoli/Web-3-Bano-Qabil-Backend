import mongoose, { Schema } from "mongoose";
import { ProductTypes } from "../types/productTypes.js";

const productSchema = new Schema<ProductTypes>({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ProductTypes>("Product", productSchema);
