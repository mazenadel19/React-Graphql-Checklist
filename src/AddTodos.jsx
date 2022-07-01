import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

export function AddTodos() {
  const [state, setstate] = useState({ text: "", done: false });
  const insertTodo = gql`
  mutation insertTodo {
    insert_todos(objects: ${state}) {
      returning {
        done
        id
        text
      }
    }
  }
`;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mb3">
      <div>
        <input
          className="pa2 f4 b--dashed"
          type="text"
          placeholder="text"
          name="text"
          id="text"
          onChange={(e) => setstate({ ...state, text: e.target.value })}
        />
      <button type="submit" className="pa2 f4 bg-green">
        create
      </button>
      </div>
    </form>
  );
}
