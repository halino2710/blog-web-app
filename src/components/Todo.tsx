import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // alert(`Todo: ${todo}`);
    todo.map((todo) => {
      return (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => {
              e.target.checked
                ? setTodo((prev) => [...prev, todo])
                : setTodo((prev) => prev.filter((todo) => todo.id !== todo.id));
            }}
          />
          {todo.text}
        </li>
      );
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          What's on you mind?:
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <p>{todo}</p>
    </>
  );
}

export default Todo;
