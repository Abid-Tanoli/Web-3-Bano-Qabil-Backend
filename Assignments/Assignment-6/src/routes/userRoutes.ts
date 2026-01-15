import { Router } from "express";
import { createUser, getAllUsers, getByUserId, updateUser, deleteUser } from "../controllers/userController.ts";
import { adminOnly, protect } from "../middlewares/authMiddleware.ts";

const route = Router();

route.use(protect);   
route.use(adminOnly); 

route.get("/getallusers", getAllUsers);
route.get("/user/:id", getByUserId);
route.post("/createuser", createUser);
route.put("/updateuser/:id", updateUser);
route.delete("/deleteuser/:id", deleteUser);

export default route;
