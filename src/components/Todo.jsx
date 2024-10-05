import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) {
      return;
    }
    setTodo("");
    setTodo([...todo, input]);
    setInput("");
  };
  return (
    <div className="container">
      <div>
        <div className="input--box">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo} onKeyUp={addTodo}>
            Add +
          </button>
        </div>

        {todo.length > 0 ? (
          <ul className="todo--list">
            {todo.map((t, index) => (
              <li key={index}>
                <span>
                  <input type="checkbox" /> {t}
                </span>
                <button
                  onClick={() =>
                    setTodo(todo.filter((_, item) => item !== index))
                  }
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <span>Note Found.</span>
        )}
      </div>
    </div>
  );
};

export default Todo;
