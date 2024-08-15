import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "First",
    },
    {
      id: 2,
      name: "Second",
    },
    {
      id: 3,
      name: "Third",
    },
  ]);
  const [text, setText] = useState("");

  const onInputChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onInputChange}></input>
      <button
        onClick={() =>
          setTodos([...todos, { name: text, id: todos.length + 1 }])
        }
      >
        Add User
      </button>

      {todos.map((todo) => {
        return <li key={todo.id}>Item: {todo.name}</li>;
        //What is key?
        // Keys help react identify which elements were added, changed or removed.
        // Keys should be given to array elements for providing a unique identity for each element.
        // Without keys, React does not understand the order or uniqueness of each element.
        // With keys, React has an idea of which particular element was deleted, edited, and added.
        // Keys are generally used for displaying a list of data coming from an API.
      })}
    </div>
  );
}
