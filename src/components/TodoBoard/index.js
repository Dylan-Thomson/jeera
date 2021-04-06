import { useEffect, useState } from "react";
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
  const [lists, setLists] = useState(initialLists);

  useEffect(() => {
      console.log(lists);
  }, [lists]);

  return (
    <section>
      {Object.keys(lists).map((key, i) => {
        return <TodoList key={key} todos={lists[key]} listType={key} setLists={setLists}/>;
      })}
    </section>
  );
};

export default TodoBoard;
