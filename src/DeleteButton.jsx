import { useMutation, gql } from "@apollo/client";

import { GET_TODOS } from "./DisplayTodos";

const DELETE_TODOS = gql`
  mutation deleteTodo($id: uuid!) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export default function DeleteButton({ id }) {
  const [deleteTodo] = useMutation(DELETE_TODOS);

  const hadnleDeleteTodo = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (isConfirmed) {
      const deleteData = await deleteTodo({
        variables: { id },
        update: (cache) => {
          const prevData = cache.readQuery({ query: GET_TODOS });
          const newTodos = prevData.todos.filter((todo) => todo.id !== id);
          cache.writeQuery({ query: GET_TODOS, data: { todos: newTodos } });
        },
      });
      console.log("DELETE_TODOS", deleteData);
    }
  };

  return (
    <button
      className="bn red f4 bg-transparent pointer"
      onClick={hadnleDeleteTodo}
    >
      &times;
    </button>
  );
}
