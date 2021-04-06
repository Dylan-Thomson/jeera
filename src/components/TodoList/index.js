import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";

const TodoList = ({ todos, listType, setLists }) => {
  const [list, setList] = useState(todos);

  useEffect(() => {
    setLists((prev) => {
      prev[listType] = list;
      return prev;
    });
  }, [list]);

  return (
    <>
      <h2>{listType}</h2>
      <ol>
        {list.map((item, i) => {
          const deleteItem = () => {
            setList(list.filter((row) => row !== item));
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
