import { useState, useRef } from "react";

import "./App.css";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "React 공부하기1",
    date: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(mockData);
  const idxRef = useRef(3);
  const onCreate = (content) => {
    const newData = {
      id: idxRef.current++,
      content: content,
      date: new Date().getTime(),
      isDone: false,
    };
    setTodos([newData, ...todos]);
  };
  return (
    <div className="App">
      <Header></Header>
      <Editor onCreate={onCreate}></Editor>
      <List todos={todos} setTodos={setTodos}></List>
    </div>
  );
}

export default App;
