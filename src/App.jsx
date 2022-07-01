import { AddTodos } from './AddTodos';
import { DisplayTodos } from './DisplayTodos';



function App() {
  return (
    <div className="vh-100 code flex flex-column items-center bg-purple white pa4">
      <h1 className="f2">GrapgQL Checklist 🚀</h1>
      <br />
      <AddTodos />
      <br />
      <DisplayTodos />
    </div>
  );
}

export default App;
