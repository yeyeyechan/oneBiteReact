import "./List.css";
import TodoItem from "./TodoItem";
const List = ({ todos, setTodos }) => {
  const onChange = (idx) => {
    todos[idx].isDone = !todos[idx].isDone;
    setTodos(todos);
  };
  const onDelete = (idx) => {
    todos.splice(idx);
    setTodos(todos);
  };
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력해주세요"></input>
      <div className="todos_wrapper">
        {todos.map((todo, idx) => {
          return (
            <TodoItem
              key={idx}
              onChange={() => {
                onChange(idx);
              }}
              content={todo.content}
              date={todo.date}
              onDelete={() => {
                onDelete(idx);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default List;
