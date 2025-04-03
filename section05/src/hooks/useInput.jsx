import { useState } from "react";
const useInput = () => {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  return [input, onChange];
};

export default useInput;
