import { AddTodos } from './AddTodos';
import { DisplayTodos } from './DisplayTodos';
import "./App.css";



function App() {
  return (
    <div className="App code flex flex-column items-center bg-purple white pa4">
      <h1 className="f2">GraphQL Checklist 🚀</h1>
      <br />
      <AddTodos />
      <br />
      <DisplayTodos />
    </div>
  );
}

export default App;
