import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [inputValue, setInputValue] = useState(" ");

  const handleForm = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue(" ")
    console.log('Form submitted with:', inputValue);
  };
  return (
    <div>
      <div className="flex flex-col w-[20vw] justify-center mt-12 gap-5 border border-2 ">
        <p className="text-center font-bold text-2xl">Todo App</p>
        <div className="flex justify-center mb-9">
          <form action="" onSubmit={handleForm}>
            <input
              type="text"
              className="text-md pl-3 p-1 border border-4"
              value={inputValue}
              name=""
              id=""
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#000080] text-white p-2 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
