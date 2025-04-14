import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Diary from "./pages/Diary";
import New from "./pages/New";

import getEmotionIcons from "./utils/get-emotion-icons";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Edit from "./pages/Edit";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((ele) =>
        ele.id === action.data.id ? action.data : ele
      );
    case "DELETE":
      return state.filter((ele) => ele.id !== action.id);
  }
};
function App() {
  const [diaries, dispatch] = useReducer(reducer, []);
  const dispatchContext = createContext();
  const diaryContext = createContext();
  const onCreate = useCallback((data) => {
    dispatch({
      type: "CREATE",
      data: data,
    });
  }, []);
  const onDelete = useCallback((id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  }, []);
  const onUpdate = useCallback((data) => {
    dispatch({
      type: "UPDATE",
      data: data,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onDelete,
      onUpdate,
    };
  }, []);

  return (
    <>
      {" "}
      <Header
        title={"2025년 4월"}
        left_child={<Button text={"<"} />}
        right_child={<Button text={">"} />}
      />
      <diaryContext.Provider value={diaries}>
        <dispatchContext.Provider value={memoizedDispatch}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Diary/:id" element={<Diary />}></Route>
            <Route path="/Edit/:id" element={<Edit />}></Route>
            <Route path="/New" element={<New />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </dispatchContext.Provider>
      </diaryContext.Provider>
    </>
  );
}

export default App;
