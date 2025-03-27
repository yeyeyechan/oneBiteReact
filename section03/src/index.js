//const { add, sub } = require("./math.js");
import mul, { add, sub } from "./math.js";
import randomcolor from "randomcolor";

const randomColor = randomcolor();

console.log(randomColor);
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log("test");
