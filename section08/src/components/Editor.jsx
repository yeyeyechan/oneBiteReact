import "./Editor.css";
import { useRef } from "react";
const Editor = ({ todos, setTodos }) => {
  const inputValue = useRef("");
  const onChange = (e) => {
    const originData = [...todos];
    const newData = {
      id: 0,
      content: "",
      date: "",
      isDone: false,
    };
    newData.id = originData.length + 1;
    newData.content = inputValue.current.value;
    newData.date = new Date().getTime();
    originData.push(newData);
    setTodos(originData);
    inputValue.current.value = "";
  };
  return (
    <div className="Editor">
      <input placeholder="새로운 Todo..." ref={inputValue}></input>
      <button onClick={onChange}>추가</button>
    </div>
  );
};
export default Editor;
