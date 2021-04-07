import { useState } from "react";
import TodoList from "../TodoList";
import TaskStateEnum from "../../constants/taskStateEnum";

const initialLists = {};
initialLists[TaskStateEnum.TODO] = [
  "Come up with a better idea.",
  "Feed cats",
  "Think of todo items that aren't about food",
];
initialLists[TaskStateEnum.INPROGRESS] = ["Create Jeera App"];
initialLists[TaskStateEnum.DONE] = ["Go to work", "Eat Lunch", "Order Dinner"];

const TodoBoard = () => {
  // TODO useState is meant for more simple values
  // Look into useReducer to manage this lists object
  const [lists, setLists] = useState(initialLists);

  // useEffect(() => {
  //   console.log(lists);
  // });

  return (
    <section>
      {Object.keys(lists).map((key, i) => {
        const updateLists = (newList) => {
          lists[key] = newList;
          setLists(lists);
        };
        return (
          <TodoList
            // Key set to a TaskStateEnum - there will only be one of each
            key={key}
            todos={lists[key]}
            listType={key}
            updateLists={updateLists}
          />
        );
      })}
      <button onClick={() => console.log(lists)}>Console log board state for testing</button>
    </section>
  );
};

export default TodoBoard;
