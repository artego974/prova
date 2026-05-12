import { Router } from "express";
import { GuestController } from "../controllers/GuestController";
import { authMid } from "../middlewares/authMid";
import { roleMid } from "../middlewares/roleMid";

const guestRoutes = Router()
const controller = new GuestController()

guestRoutes.get("/list", authMid, roleMid("admin"), controller.list.bind(controller))
guestRoutes.post("/create", authMid, controller.create.bind(controller))
guestRoutes.put("/update/:id", authMid, controller.update.bind(controller))
guestRoutes.delete("/delete/:id", authMid, controller.delete.bind(controller))
guestRoutes.get("/dashboard", authMid, controller.dashboard.bind(controller))
guestRoutes.patch("/checkin/:id", authMid, controller.checkin.bind(controller))

export default guestRoutes