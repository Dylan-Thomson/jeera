import React, { useState } from "react";
import TaskStateEnum from "../../constants/taskStateEnum";

const ListItem = ({ task, deleteItem, status }) => {
  const [done, setDone] = useState(false);

  return (
    <li>
      <span>{task}</span>
      {status !== TaskStateEnum.TODO && (
        <button type="button">Move to TODO</button>
      )}
      {status !== TaskStateEnum.INPROGRESS && (
        <button type="button">Move to INPROGRESS</button>
      )}
      {status !== TaskStateEnum.DONE && (
        <button type="button">Move to DONE</button>
      )}
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  );

  // function toggleDone() {
  //   setDone(!done);
  //   // setDone does not change done in the scope of this function, not sure why
  //   // At any rate, this short circuit runs an alert when setting done from false to true
  //   done || alert(`FINISHED ${task}`);
  // }
};

export default ListItem;
