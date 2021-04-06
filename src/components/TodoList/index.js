import React, { useState, useMemo } from "react";
import ListItem from "../ListItem";

const initialState = [
    "Come up with a better idea.",
    "Feed cats",
  ];
const TodoList = ({ todos }) => {
  const [list, setList] = useState(initialState);

//   useMemo(() => {
//       setList(todos);
//   }, [todos])

  return (
    <ol>
        {list.map(item => (
            <ListItem task={item} setList={setList} list={list}/>
        ))}
    </ol>
  );

};

export default TodoList;
