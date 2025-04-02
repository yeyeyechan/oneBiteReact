import { useState } from "react";
const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>{light}</h1>
      ) : (
        <h1 style={{ backgroundColor: "grey" }}>{light}</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
          // if (light === "ON") light = "OFF";
          // else light = "ON";
          //console.log(light);
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};
export default Bulb;
