import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
const List = ({ todos, setTodos }) => {
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const onUpdate = (idx) => {
    setTodos(
      todos.map((todo) =>
        todo.id === idx ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const onDelete = (index) => {
    setTodos(todos.filter((todo) => todo.id !== index));
  };
  const getFilteredData = () => {
    if (search === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterdTodos = getFilteredData();
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        placeholder="검색어를 입력해주세요"
        value={search}
        onChange={onSearch}
      ></input>
      <div className="todos_wrapper">
        {filterdTodos.map((todo, idx) => {
          return (
            <TodoItem
              key={idx}
              onUpdate={onUpdate}
              {...todo}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};
export default List;
