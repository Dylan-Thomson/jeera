import React, { useState } from "react";

const ListItem = ({ task, deleteItem }) => {
  const [done, setDone] = useState(false);

  return (
    <li>
      <span>{task}</span>
      <input type="checkbox" onClick={toggleDone} />
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  );

  function toggleDone() {
    setDone(!done);
    // setDone does not change done in the scope of this function, not sure why
    done || alert(`FINISHED ${task}`);
  }
};

export default ListItem;
