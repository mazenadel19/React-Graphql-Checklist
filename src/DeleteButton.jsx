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
    const deleteData = await deleteTodo({
      variables: { id },
      refetchQueries: [{ query: GET_TODOS }],
    });
    console.log("DELETE_TODOS", deleteData);
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
