import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

type updatetitle = {
    id : number;
    title : string;
}

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getTodo = async (c: Context) => {
    try {
        const param = c.req.param("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getAllTodo = async (c: Context) => {
    try {
        const data = await todoModel.getAllTodo();
        return c.json(data, 200);
        }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const updateTodo = async (c:Context) => {
    try {
        const id = c.req.param("id");
        if(id !== undefined && id !== null){
            const data = await todoModel.updateTodo(parseInt(id));
            return c.json(data,200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch(e){
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const updateTitle = async (c: Context) => {
    try {
        const body = await c.req.json<updatetitle>();
        if(body.id !== undefined && body.title !== undefined){
            const data = await todoModel.updateTitle(body.id, body.title);
            return c.json(data,200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    } catch (e) {
        
    }
}

const getUserTodo = async (c: Context) => {
    try {
        const id = c.req.param("id");
        if(id !== undefined && id !== null){
            const data = await todoModel.getUserTodo(parseInt(id));
            return c.json(data,200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
}

export { createTodo , getTodo , getAllTodo , updateTodo , updateTitle , getUserTodo};