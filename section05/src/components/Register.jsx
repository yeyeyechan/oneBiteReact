import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("1");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const onChangeName = (e) => {
    console.log(e);
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    console.log(e);
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    console.log(e);
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    console.log(e);
    setBio(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} placeholder={"name"} onChange={onChangeName} />
        {name}
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date"></input>
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
