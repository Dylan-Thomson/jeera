import React, { useState } from "react";
import ListItem from "../ListItem";
import TaskStateEnum from "../../constants/taskStateEnum";

const TodoList = ({ todos, listType }) => {
  const [list, setList] = useState(todos);

  return (
    <>
      <h2>{listType}</h2>
      <ol>
        {list.map((item, i) => {
          const deleteItem = () => setList(list.filter((row) => row !== item));
          return (
            <ListItem
              key={i}
              task={item}
              deleteItem={deleteItem}
              status={listType}
            />
          );
        })}
      </ol>
    </>
  );
};

export default TodoList;
