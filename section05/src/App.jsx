import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
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
      <Button {...propsParam} />
      <Button text={"블로그"} />
      <Button text={"뉴스"}>
        {" "}
        <Child></Child>
      </Button>
    </>
  );
}

export default App;
