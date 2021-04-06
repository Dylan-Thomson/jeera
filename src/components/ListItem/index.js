import React, { useState, useEffect } from "react";

const ListItem = ({ task, list, setList }) => {
  const [done, setDone] = useState(false);

  return (
    <li>
      <span>{task}</span>
      <input type="checkbox" onClick={toggleDone} />
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );

  function toggleDone() {
    setDone(!done);
    done || alert(`FINISHED ${task}`);
  }

  function handleDelete() {
    setList(list.filter(todo => todo !== task));
  }
};

export default ListItem;
