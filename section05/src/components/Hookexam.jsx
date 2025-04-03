import useInput from "./../hooks/useInput";
const Hookexam = () => {
  const [input, setInput] = useInput();

  return (
    <div>
      <input value={input} onChange={setInput}></input>
    </div>
  );
};

export default Hookexam;
