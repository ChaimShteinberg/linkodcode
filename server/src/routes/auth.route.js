import express from "express";
import { loginController, registerController } from "../controllers/users.controller.js";

export const usersRouter = express.Router();

usersRouter.post("/register", registerController);

usersRouter.post("/login", loginController);
