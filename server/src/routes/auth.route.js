import express from "express";
import { registerController } from "../controllers/users.controller.js";

export const usersRouter = express.Router();

usersRouter.post("/register", registerController);
