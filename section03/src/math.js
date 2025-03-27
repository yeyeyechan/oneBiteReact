export function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
export default function multiply(a, b) {
  return a * b;
}
//commonJs 방식
/*module.exports = {
  add,
  sub,
};*/

export { sub };
