import { Todo } from '../types/Todo';
import { Axios } from '../utils/axiosInstance';
 
type getTodoResponse = {
    success: boolean;
    data: Todo[] | null;
    msg: string;
};

type TodoResponse = {
  success: boolean;
  data: Todo | null;
  msg: string;
};
  
 
const GetTodoAPI = async () => {
    try {
        const response = await Axios.get<getTodoResponse>('/todo/get');
        return response.data;
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
            msg: `${e}`,
        };
    }
};

const CreateTodoAPI = async (name: string) => {
    try {
      const response = await Axios.post<TodoResponse>('/todo/create', { 
        name: name, 
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null,
        msg: `${e}`,
      };
    }
  };

const EditTodoTitle = async (id:number, name:string) => {
  try {
    const response = await Axios.patch<TodoResponse>('/todo/updateTitle', {
      id: id,
      name: name,
    })
    return response.data;
  } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null,
        msg: `${e}`,
      };
  }
}

const ChangeTodoStatus = async (id:number) => {
  try {
    const response = await Axios.patch<TodoResponse>('/todo/success', {
      id: id,
      success: true,
    })
    return response.data;
  } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null,
        msg: `${e}`,
      };
  }
}

const DeleteTodo = async (id: number) => {
  try {
    const response = await Axios.delete<TodoResponse>('/todo/delete', {
      data:{
        id: id,
      }
    })
    return response.data;
  } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null,
        msg: `${e}`,
      };
  }
}

export { GetTodoAPI, CreateTodoAPI , EditTodoTitle, ChangeTodoStatus, DeleteTodo};