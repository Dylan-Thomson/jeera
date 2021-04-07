// import TaskStateEnum from "../../constants/taskStateEnum";

// import { useEffect } from "react";

const ListItem = ({ task, deleteItem }) => {

  // useEffect(() => {

  // }, [lists])
  return (
    <li>
      <span>{task}</span>
      {/* {status !== TaskStateEnum.TODO && (
        <button type="button">Move to TODO</button>
      )}
      {status !== TaskStateEnum.INPROGRESS && (
        <button type="button">Move to INPROGRESS</button>
      )}
      {status !== TaskStateEnum.DONE && (
        <button type="button">Move to DONE</button>
      )} */}
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

export default ListItem;
