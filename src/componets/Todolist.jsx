import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Todolist = ({ todo, index, todos, setTodos }) => {
  const [click, setClick] = useState(false);

  const handleDelete = (value, e) => {
    const todo = todos.filter((todo) => todo !== todos[value]);
    if (click) setClick(!click);
    setTodos(todo);
  };

  return (
    <div className="flex justify-evenly mx-5 mt-2" key={index}>
      <div className="mt-1">
        <input
          className="accent-green-500"
          type="checkbox"
          checked={click}
          onChange={() => setClick(!click)}
        />
      </div>
      <div className="w-96 pl-2">
        <p className={`text-xl ${click && "line-through text-gray-500"}`}>
          {todo}
        </p>
      </div>
      <button className="" onClick={() => handleDelete(index)}>
        <RiDeleteBin6Fill
          size={20}
          className="fill-green-500 hover:fill-red-500"
        />
      </button>
    </div>
  );
};

export default Todolist;
