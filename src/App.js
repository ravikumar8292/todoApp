import React, { useState } from "react";
import TodoForm from "./component/TodoForms";
import TodoList from "./component/TodoLists";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputValue) => {
    const newTodo = { id: Date.now(), inputValue, completed: false };
    setTodos([...todos, newTodo]);
    // console.log(todos);
  };

  const deleteTodo = (id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = (id,newText)=>{
    setTodos(todos.map(todo=>(
      todo.id === id ? {...todo, inputValue : newText} : todo
    )))
  }
  
  const toggleTodo = (id)=>{
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="flex flex-col justify-center mx-auto w-1/4">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
