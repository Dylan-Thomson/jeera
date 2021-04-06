import React, { useState } from "react";
import ListItem from "../ListItem";

const initialState = [
    "Come up with a better idea.",
    "Feed cats",
  ];
const TodoList = ({ todos }) => {
  const [list, setList] = useState(initialState);


  return (
    <ol>
        {list.map((item, i) => {
            const deleteItem = () => setList(list.filter(row => row !== item));
            return <ListItem key={i} task={item} deleteItem={deleteItem}/>
        }
        )}
    </ol>
  );

};

export default TodoList;
