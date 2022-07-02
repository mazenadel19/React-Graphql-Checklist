import { useMutation, gql } from "@apollo/client";

const TOGGLE_TODO = gql`
  mutation toggleTodo($id: uuid!, $done: Boolean) {
    update_todos(where: { id: { _eq: $id } }, _set: { done: $done }) {
      returning {
        done
        id
        text
      }
    }
  }
`;
export default function Todo({ id, done, text }) {
  const [ toggleTodo ] = useMutation(TOGGLE_TODO);

  const hadleToggleTodo = async (id, done) => {
    const data = await toggleTodo({ variables: { id, done: !done } });
    console.log("TOGGLE_TODO", data);
  };

  return (
    <span
      className={`pointer list pa1 f3 ${done && "strike"} mr4`}
      onClick={() => hadleToggleTodo(id, done)}
    >
      {text}
    </span>
  );
}
