import { useEffect, useState } from "react";
import "./App.css";
import Todolist from "./componets/Todolist";
import { MdLibraryAdd } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    const todo = todos.filter((todo) => todo !== todos[index]);
    setTodos(todo);
  };

  return (
    <div
      className="bg-[#091a36] min-h-screen 
    flex flex-col items-center justify-center text-white"
    >
      <div className="w-[400px] h-[600px] rounded-xl ">
        <div className="flex justify-center mt-10">
          <h1 className="text-5xl underline decoration-2 decoration-green-400 uppercase">
            Todo App
          </h1>
        </div>
        <div className="flex justify-center mt-4 bg-[#1d4054] p-10">
          <form onSubmit={handleSubmit}>
            <div className="flex bg-green-500 ">
              <input
                type="text"
                required
                placeholder="Add Todo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-72 p-2 text-gray-500
              outline-none "
              />
              <button type="submit" className="p-2 hover:bg-blue-500">
                <IoAddSharp size={25} className="" />
              </button>
            </div>
          </form>
        </div>
        <div className="mt-2 bg-[#1d4054] h-[400px]">
          <div className="flex justify-center">
            <h1 className="text-2xl underline mb-5 decoration-green-500">
              Todo Lists
            </h1>
          </div>
          <div className="flex flex-col">
            {todos.map((todo, index) => (
              <Todolist
                key={index}
                todo={todo}
                index={index}
                handleDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
