import { Router } from "express";
import { GuestController } from "../controllers/GuestController";
import { authMid } from "../middlewares/authMid";
import { roleMid } from "../middlewares/roleMid";

const guestRoutes = Router()
const controller = new GuestController()

guestRoutes.get("/list",  controller.list.bind(controller)) //authMid
guestRoutes.post("/create",  controller.create.bind(controller)) //authMid
guestRoutes.put("/update/:id",  controller.update.bind(controller)) //authMid
guestRoutes.delete("/delete/:id",  controller.delete.bind(controller)) //authMid
guestRoutes.get("/dashboard",  controller.dashboard.bind(controller)) //authMid
guestRoutes.patch("/checkin/:id",  controller.checkin.bind(controller)) //authMid

export default guestRoutes