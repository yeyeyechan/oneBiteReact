import "./TodoItem.css";
const TodoItem = ({ content, date, onChange, onDelete }) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" onChange={onChange}></input>
      <div className="content">{content}</div>
      <div className="day">{date}</div>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
