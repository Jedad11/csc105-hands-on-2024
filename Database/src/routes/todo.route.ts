import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/create", todoController.createTodo);
todoRouter.get("/get/:id", todoController.getTodo);
todoRouter.get("/getAll", todoController.getAllTodo);
todoRouter.patch("/updateStatus/:id", todoController.updateTodo);
todoRouter.patch("/updateTitle", todoController.updateTitle);
todoRouter.get("/user/:id", todoController.getUserTodo);

export { todoRouter };