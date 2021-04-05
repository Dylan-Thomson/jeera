import React, { useState, useEffect } from "react";

const ListItem = ({ task }) => {
  const [done, setDone] = useState(false);
  //   const [task, setTask] = useState(task);

  //   // Similar to componentDidMount and componentDidUpdate:
  //   useEffect(() => {
  //     // Update the document title using the browser API
  //     document.title = `You clicked ${count} times`;
  //   });

  return (
    <li>
      <span>{task}</span> 
      <input type="checkbox" onClick={() => toggleDone(done)} /> 
      <button type="button" onClick={handleDelete}>Delete</button>
    </li>
  );

  function toggleDone(done) {
    done = !done;
    done && alert(`FINISHED ${task}`);
    setDone(done);
  }

  function handleDelete() {

  }
};

export default ListItem;
