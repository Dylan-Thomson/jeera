import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";

const TodoList = ({ todos }) => {
  const [list, setList] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      setList(todos);
    });

  return (
    <ol>
        {list.map(item => (
            <ListItem task={item}/>
        ))}
    </ol>
  );

};

export default TodoList;
