import { useState, useEffect} from 'react';
import { Todo } from './types/Todo';
import { TodoCard } from './components/todoCard.tsx';
import * as API from './api/Todoapi';
 
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoName, setNewTodoName] = useState<string>('');
  
  async function handleFetchTodoData() {
    try {
    const resp = await API.GetTodoAPI();
    setTodos(Array.isArray(resp) ? resp : []);
    console.log(resp);

    } catch (error) {
      console.error("Error loading todos:",error);
    }
  }

  useEffect (() => {
    handleFetchTodoData();
  }, []);

  async function handleAdd() {
    const response = await API.CreateTodoAPI(newTodoName);
    if(!response.success){
      alert(response.msg);
    }
    handleFetchTodoData();
    setNewTodoName('');
  }

  async function handleEditTitle(id: number, newName: string) {
    const response = await API.EditTodoTitle(id, newName);
    if(!response.success){
      alert(response.msg)
    }
    handleFetchTodoData();
  }

  async function handleSuccess(id: number) {
    const response = await API.ChangeTodoStatus(id);
    if(!response.success){
      alert(response.msg);
    }
    handleFetchTodoData();
  }

  async function handleDelete(id: number) {
    // setTodos((prev) => prev.filter((todo) => todo.id !== id));
    const response = await API.DeleteTodo(id);
    if(!response.success){
      alert(response.msg);
    }
    handleFetchTodoData();
  }

  return (
    <div className='w-screen h-screen flex p-10 justify-center'>
      <div className='flex flex-col gap-10'>
        <div>
          <input
            placeholder='New Todo'
            value={newTodoName}
            onChange={(e) => setNewTodoName(e.target.value)}
          />
          <button onClick={handleAdd}>Add Todo</button>
        </div>
        <div className='flex flex-col gap-10'>
          {todos.map((todo) => (
            <div key={todo.id} className="border rounded-lg shadow-md p-4 bg-white">
              <TodoCard
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEditTitle}
                handleSuccess={handleSuccess}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 

export default App;
