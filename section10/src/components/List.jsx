import { useMemo, useState, useCallback } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
const List = ({ todos, dispatch }) => {
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const onUpdate = useCallback((idx) => {
    dispatch({
      type: "UPDATE",
      data: idx,
    });
  }, []);
  const onDelete = useCallback((index) => {
    dispatch({
      type: "DELETE",
      data: index,
    });
  }, []);

  const filterdTodos = getFilteredData();

  const { totalCount, notDonCount, donCount } = useMemo(() => {
    const totalCount = todos.length;
    const notDonCount = todos.filter((ele) => !ele.isDone).length;
    const donCount = totalCount - notDonCount;
    console.log({
      totalCount,
      notDonCount,
      donCount,
    });
    return {
      totalCount,
      notDonCount,
      donCount,
    };
  }, [todos]);
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>totalCount: {totalCount}</div>
      <div>notDonCount: {notDonCount}</div>
      <div>donCount: {donCount}</div>
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
