import React from "react";
import TodoItem from "./TodoItems";
const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  return (
    <div>
      <ul className="flex flex-col justify-center">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
      </ul>
    </div>
  );
};

export default TodoList;
