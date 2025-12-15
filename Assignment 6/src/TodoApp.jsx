import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {
    let trimTask = task.trim();
    if (trimTask === "") return;

    let updateTodos = [...todos, trimTask];
    updateTodos.sort();
    setTodos(updateTodos);
    setTask("");
  }

  function deleteTask(deleteIndex) {
    let updateTodos = todos.filter(function (todo, index) {
      return index !== deleteIndex;
    });
    setTodos(updateTodos);
  }

  function enterBtn(e) {
    if (e.key === "Enter") {
      addTask()
    }
  }

  return (
    <div className="container">
      <h2>ToDo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={enterBtn}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {todos.map(function (todo, index) {
          return (
            <li key={index}>
              {" "}
              {todo}
              <button
                onClick={() => {
                  deleteTask(index);
                }}
              >
                {" "}
                Delete{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
