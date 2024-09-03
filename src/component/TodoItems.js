import React, { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.inputValue);

  const onDelete = (id) => {
    deleteTodo(id);
  };
  const handleedit = () => {
    setIsEditing(true);
  };
  const handlesave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };
  return (
    <>
        <li
          className={`flex justify-between items-center w-[308px] h-[40px] px-1 border border-2`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="h-4 w-4"
          />

          {isEditing ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={handlesave} className="bg-[#059862] text-white px-1 rounded text-lg">save</button>
            </>
          ) : (
            <>
              <p className={`break-words overflow-hidden mx-3 ${todo.completed && 'line-through'}`}>{todo.inputValue}</p>
              <div className="flex items-center">
                <button onClick={handleedit}>✏️</button>
                <button type="button" onClick={() => onDelete(todo.id)}>
                  <span>🗑️</span>
                </button>
              </div>
            </>
          )}    
        </li>
    </>
  );
};

export default TodoItem;
