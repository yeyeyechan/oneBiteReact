import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Diary from "./pages/Diary";
import New from "./pages/New";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/Diary" element={Diary}>
          {" "}
        </Route>
        <Route path="/New" element={New}></Route>
        <Route path="*" element={NotFound}></Route>
      </Routes>
    </>
  );
}

export default App;
