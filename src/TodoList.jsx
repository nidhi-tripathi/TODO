import React, {useState} from 'react'


function TodoList() {

const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = useState('')

const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const updateTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" placeholder="Add a new todo" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) =>(
         <li key={index}>
{todo}
<button onClick={()=>updateTodo(index, prompt('Update todo:', todo))}>Update</button>
<button onClick={()=> deleteTodo(index)}>Delete</button>
         </li>   
        ))}
      </ul>
    </div>
  )
}

export default TodoList
