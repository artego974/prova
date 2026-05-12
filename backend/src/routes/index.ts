import { Router } from "express";
import userRoutes from "./userRoutes";
import guestRoutes from "./guestRoutes";

const routes = Router()

routes.use("/user",userRoutes)
routes.use("/guest", guestRoutes)

export default routes