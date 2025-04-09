import { memo, useContext } from "react";
import "./TodoItem.css";
import { dispatchContext, toDoContext } from "../App";
const TodoItem = ({ content, id, isDone, date }) => {
  const { onUpdate, onDelete } = useContext(dispatchContext);

  const onChange = () => {
    onUpdate(id);
  };
  const onClickHandler = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" onChange={onChange} checked={isDone}></input>
      <div className="content">{content}</div>
      <div className="day">{date}</div>
      <button onClick={onClickHandler}>삭제</button>
    </div>
  );
};
/*const memoizedTodo = memo(TodoItem, (prevProps, nextProps) => {
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});*/
export default memo(TodoItem);
