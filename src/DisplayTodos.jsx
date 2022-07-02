import { useQuery, gql } from "@apollo/client";
import DeleteButton from "./DeleteButton";
import Todo from "./Todo";

export const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      text
      done
    }
  }
`;

export function DisplayTodos() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>Error fetchng todos... :(</p>;

  return (
    <div className="flex items-center justify-center flex-column">
      {data.todos.map(({ id, text, done }) => (
        <p key={id}>
          <Todo id={id} text={text} done={done} />
          <DeleteButton id={id} />
        </p>
      ))}
    </div>
  );
}
