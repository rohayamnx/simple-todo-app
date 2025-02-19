import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-1 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r transition duration-300" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded shadow-sm hover:bg-gray-200 transition duration-200"
          >
            <span className="text-gray-700">{t}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white p-1 rounded transition duration-300"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
