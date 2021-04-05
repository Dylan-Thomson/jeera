import "./App.css";
import ListItem from "./components/ListItem";
import TodoList from "./components/TodoList";
const todos = [
  "Come up with a better idea.",
  "Feed cats",
];
function App() {
  return (
    <>
      {/* <ul>
        <ListItem task={"Come up with a good idea."} />
      </ul> */}
      <TodoList todos={todos}/>
    </>
  );
}

export default App;
