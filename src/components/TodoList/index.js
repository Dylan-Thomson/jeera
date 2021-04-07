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
            const newList = list.filter((row) => row !== item);
            // TODO look into context providers to share a global state, managing two states is not great
            setList(newList);
            updateLists(newList);
          };
          return (
            <ListItem
              // Not the ideal way to generate unique key but better than just using index (temporary, key will be an ID from DB)
              key={new Date().getTime().toString().concat(i)}
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
