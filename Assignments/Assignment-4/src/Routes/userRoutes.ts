import { Router } from "express";
import { createUser, getAllUsers, getByUserId, updateUser, deleteUser } from "../Controllers/userController.js";

const route = Router();

route.get("/getallusers", getAllUsers);
route.get("/user/:id", getByUserId);
route.post("/createuser", createUser);
route.put("/updateuser/:id", updateUser);
route.delete("/deleteuser/:id", deleteUser);

export default route;
