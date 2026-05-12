import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const userRoutes = Router()
const controller = new AuthController()

userRoutes.post("/login",controller.login.bind(controller))

export default userRoutes