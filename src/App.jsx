import React, {useRef, useState} from "react";

function App() {
  const [todoLists, setTodoLists] = useState([])
  const inputRef = useRef();
  const add =  (e) => {
    e.preventDefault();
    const inputText = inputRef.current.value.trim();
    
    if(inputText === "")
{
  return null;
}    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete:false,
    }
    setTodoLists((prev) => [...prev, newTodo]);
    inputRef.current.value = ""; // Clear the input field
  };
const deleteTodo = (id) => {
  setTodoLists((prev) => prev.filter((todo) => todo.id !== id));
};
  return (
    <>
      <div className="bg-stone-900 min-h-screen flex justify-center items-center">
      <div className="container h-80 w-72 bg-slate-50 rounded-3xl">
        <div className=" flex header  h-10 w-40 relative top-8 left-5 ">
          <img src="/todo_icon.png" className="size-8 "></img>
          <h1 className="font-bold text-2xl">To-Do List</h1>
        </div>
        <div className="  w-11/12 h-13 p-1 top-10 left-3 relative">
          <form className="relative">
            <input ref={inputRef}
              className="border-2 bg-zinc-200  h-10 w-full rounded-3xl px-4 py-2"
              placeholder="Add your task"
            ></input>
            <button onClick={add} className=" w-20 absolute top-1/2 transform -translate-y-1/2 right-0 px-4 py-2 bg-orange-500 text-white rounded-3xl">
              Add +
            </button>
          </form>
        </div>
        <div className="top-11 m-3 relative">
        <ul className="list-none p-0 m-0">
              {todoLists.map((item, index) => (
                <li key={item.id} className="flex items-center">
                  <img src="/tick.png" className="size-4 m-1" alt="Complete" />
                  <span className="flex-1">{item.text}</span>
                  <img
                    className="size-4 m-1 cursor-pointer"
                    src="/delete.png"
                    alt="Delete"
                    onClick={() => deleteTodo(item.id)}
                  />
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
