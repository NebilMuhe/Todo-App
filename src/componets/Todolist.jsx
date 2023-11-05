import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Todolist = ({ todo, index, handleDelete }) => {
  const [click, setClick] = useState(false);

  return (
    <div className="flex justify-evenly mx-5 mt-2" key={index}>
      <div className="mt-1">
        <input
          className="accent-green-500"
          type="checkbox"
          onClick={() => setClick(!click)}
        />
      </div>
      <div className="w-96 pl-2">
        <p className={`text-xl ${click && "line-through text-gray-500"}`}>
          {todo}
        </p>
      </div>
      <button className="" onClick={handleDelete}>
        <RiDeleteBin6Fill
          size={20}
          className="fill-green-500 hover:fill-red-500"
        />
      </button>
    </div>
  );
};

export default Todolist;
