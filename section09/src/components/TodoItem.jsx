import "./TodoItem.css";
const TodoItem = ({ content, id, isDone, date, onUpdate, onDelete }) => {
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

export default TodoItem;
