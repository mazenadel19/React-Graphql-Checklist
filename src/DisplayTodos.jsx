import { useQuery, useMutation, gql } from "@apollo/client";

export const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      text
      done
    }
  }
`;

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

export function DisplayTodos() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  const hadleToggleTodo = async (id, done) => {
    const data = await toggleTodo({ variables: { id, done: !done } });
    console.log(data);
  };

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>Error fetchng todos... :(</p>;

  return (
    <div className="flex items-center justify-center flex-column">
      {data.todos.map(({ id, text, done }) => (
        <p key={id} onDoubleClick={() => hadleToggleTodo(id, done)}>
          <span className={`pointer list pa1 f3 ${done && "strike"}`}>
            {text}
          </span>
          <button className="bn red f4 bg-transparent">&times;</button>
        </p>
      ))}
    </div>
  );
}
