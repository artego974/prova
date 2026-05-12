import { Router } from "express";
import { GuestController } from "../controllers/GuestController";

const guestRoutes = Router()
const controller = new GuestController()

guestRoutes.get("/list", controller.list.bind(controller))
guestRoutes.post("/create", controller.create.bind(controller))
guestRoutes.put("/update/:id", controller.update.bind(controller))
guestRoutes.delete("/delete/:id",controller.delete.bind(controller))

export default guestRoutes