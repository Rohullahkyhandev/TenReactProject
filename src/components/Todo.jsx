import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) {
      return;
    }

    const newTodo = {
      id: Math.random() * 10,
      content: input,
      completed: false,
    };

    setTodo((prevTodo) => {
      return [...prevTodo, newTodo];
    });

    setInput("");
  };

  const handleComplated = (id) => {
    const newTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodo(newTodo);
  };

  return (
    <div className="container">
      <div>
        <div className="input--box">
          <input
            type="text"
            data-name="inputText"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo} onKeyUp={addTodo}>
            Add +
          </button>
        </div>

        {/* {todo.length > 0 ? ( */}
        <ul className="todo--list">
          {todo.map((t, index) => (
            <li
              key={index}
              style={
                t.completed === true
                  ? { textDecoration: "line-through", color: "gray" }
                  : {}
              }
            >
              <span>
                <input
                  data-name="checkbox"
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => handleComplated(t.id)}
                />{" "}
                <span>{t.content}</span>
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
        {/* ) : (
          <span>Note Found.</span> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Todo;
