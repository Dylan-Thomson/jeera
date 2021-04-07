import React, { useState } from "react";
import ListItem from "../ListItem";

const TodoList = ({ todos, listType, updateLists }) => {
  const [list, setList] = useState(todos);

  return (
    <>
      <h2>{listType}</h2>
      <ol>
        {list.map((item, i) => {
          const deleteItem = () => {
            // Update this state and the todoboard state (maybe just pass the entire lists object)
            const newList = list.filter(row => row !== item);
            setList(newList);
            updateLists(newList);
          };
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
