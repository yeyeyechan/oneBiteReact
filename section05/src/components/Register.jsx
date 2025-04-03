import { useState } from "react";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const onChange = (e) => {
    console.log(input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
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
    </div>
  );
};

export default Register;
