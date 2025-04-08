import { useState, useRef, useReducer, useCallback } from "react";

import "./App.css";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";
import Exam from "./components/Exam";
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
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((ele) => ele.id !== action.data);
    case "UPDATE":
      return state.map((ele) =>
        action.data === ele.id ? { ...ele, isDone: !ele.isDone } : ele
      );
  }
};
function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idxRef = useRef(3);
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idxRef.current++,
        content: content,
        isDone: false,
        date: new Date().toDateString(),
      },
    });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Editor onCreate={onCreate}></Editor>
      <List todos={todos} dispatch={dispatch}></List>
    </div>
  );
}

export default App;
