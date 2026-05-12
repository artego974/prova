import { Router } from "express";
import { GuestController } from "../controllers/GuestController";
import { authMid } from "../middlewares/authMid";
import { roleMid } from "../middlewares/roleMid";

const guestRoutes = Router()
const controller = new GuestController()

guestRoutes.get("/list", authMid, controller.list.bind(controller))
guestRoutes.post("/create",  controller.create.bind(controller)) //authMid
guestRoutes.put("/update/:id",  controller.update.bind(controller)) //authMid
guestRoutes.delete("/delete/:id",  controller.delete.bind(controller)) //authMid
guestRoutes.get("/dashboard", authMid, controller.dashboard.bind(controller))
guestRoutes.patch("/checkin/:id", authMid, controller.checkin.bind(controller))

export default guestRoutes