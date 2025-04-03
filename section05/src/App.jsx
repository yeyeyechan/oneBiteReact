import Hookexam from "./components/Hookexam";
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
      <Hookexam />
    </>
  );
}

export default App;
