import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/create", userController.createUser);
userRouter.get("/get", userController.getUser);
userRouter.patch("/edit", userController.editUserInfo);

export { userRouter };