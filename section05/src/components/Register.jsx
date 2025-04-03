import { useState, useRef } from "react";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const ref = useRef(0);
  const inputRef = useRef();
  const onChange = (e) => {
    console.log(input);
    ref.current++;
    console.log(ref.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (input.name === "") inputRef.current.focus();
  };
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          placeholder={"name"}
          onChange={onChange}
        />
        {name}
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        ></input>
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
