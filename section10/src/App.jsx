import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";

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
export const toDoContext = createContext();
export const dispatchContext = createContext();

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
  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <toDoContext.Provider value={todos}>
        <dispatchContext.Provider value={memoizedDispatch}>
          <Editor></Editor>
          <List></List>
        </dispatchContext.Provider>
      </toDoContext.Provider>
    </div>
  );
}

export default App;
