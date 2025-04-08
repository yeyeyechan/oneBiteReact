import "./Editor.css";
import { useRef } from "react";
const Editor = ({ onCreate }) => {
  const inputValue = useRef("");
  const onSubmit = () => {
    if (inputValue.current.value === "") inputValue.current.focus();
    onCreate(inputValue.current.value);
    inputValue.current.value = "";
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };
  return (
    <div className="Editor">
      <input
        placeholder="새로운 Todo..."
        ref={inputValue}
        onKeyDown={onKeyDown}
      ></input>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editor;
