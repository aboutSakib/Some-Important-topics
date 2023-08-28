import express from "express";
import { createUser, getUsers } from "../controller/users.js";
const router =express.Router();
router.get("/users",getUsers)
router.post("/user",createUser)
export default router;

