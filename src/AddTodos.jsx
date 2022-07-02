import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { GET_TODOS } from "./DisplayTodos";

const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    insert_todos(objects: { text: $text }) {
      returning {
        done
        id
        text
      }
    }
  }
`;

export function AddTodos() {
  const [todoText, setTodoText] = useState("");
  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: () => setTodoText(""),
  });

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const data =
      todoText.trim() &&
      todoText.length &&
      (await addTodo({
        variables: { text: todoText, done: false },
        refetchQueries: [{ query: GET_TODOS }],
      }));
    !data && alert("you naughty, trying to add an empty todo!!\n I See You 👀");
    // data && (console.log("ADD_TODO", data), setTodoText(""));
  };

  return (
    <form onSubmit={handleAddTodo} className="mb3">
      <div>
        <input
          className="pa2 f4 b--dashed"
          type="text"
          placeholder="text"
          name="text"
          id="text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button type="submit" className="pa2 f4 bg-green">
          create
        </button>
      </div>
    </form>
  );
}
