import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useState } from "react";
import Bulb from "./components/bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
function App() {
  const Child = () => {
    return <div>child</div>;
  };
  const propsParam = {
    text: "카페",
    color: "red",
    tag: <div></div>,
  };

  return (
    <>
      <Register />
    </>
  );
}

export default App;
