import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}

const getAllTodo = async () => {
    const todos = await db.todo.findMany();
    return todos;
}

const updateTodo = async (id: number) => {
    const findId = await db.todo.findUnique({
        where: {
            id: id,
        },
    })
    if (!findId) {
        return { success: false, msg: "Todo not found" };
    }

    const updateTodo = await db.todo.update({
        where:{
            id:id
        },
        data:{
            completed:true,
        }
    })
    return updateTodo;
}

const updateTitle = async (id : number, title:string) => {
    const updateTitle = await db.todo.update({
        where:{
            id:id
        },
        data:{
            title: title
        }
    })
    return updateTitle
}

const getUserTodo = async (id:number) => {
    const getUserTodo = await db.todo.findMany({
        where:{
            userId:id
        }
    })
    return getUserTodo
}

export { createTodo , getTodo , getAllTodo , updateTodo , updateTitle , getUserTodo};