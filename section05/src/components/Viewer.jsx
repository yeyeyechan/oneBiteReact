import { useState } from "react";
const Viewer = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>현재 카운트 :</h1>\ <div>{count}</div>
    </div>
  );
};

export default Viewer;
