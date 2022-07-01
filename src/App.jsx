import { useQuery, gql } from "@apollo/client";

const getTodos = gql`
  query getTodos {
    todos {
      id
      text
      done
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(getTodos);

  console.log({ loading, error, data });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({ id, text, done }) => (
    <div key={id}>
      <h3>{text}</h3>
      <p>{done?'yes':'no'}</p>
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayLocations />
    </div>
  );
}

export default App;
