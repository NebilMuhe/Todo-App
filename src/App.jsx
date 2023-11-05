import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    setTodos([...todos, value]);
    setValue("");
  };

  return (
    <div
      className="bg-slate-500 min-h-screen 
    flex flex-col items-center justify-center"
    >
      <div className="bg-red-700 w-[500px] h-[600px] rounded-xl">
        <div className="flex justify-center mt-10">
          <h1 className="text-6xl underline decoration-amber-900 decoration-2">
            Todo App
          </h1>
        </div>
        <div className="flex justify-center mt-8">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Add Todo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-72 p-2
            rounded-xl outline-none bg-blue-500"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="mt-5">
          <div className="flex justify-center">
            <h1 className="text-2xl underline">Todo Lists</h1>
          </div>
          <div className="flex flex-col">
            {todos.map((todo, index) => (
              <div className="flex justify-evenly" key={index}>
                <div className="flex">
                  <input className="" type="checkbox" name="" id="" />
                  <p className="pl-4">todo</p>
                </div>
                <button>del</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
