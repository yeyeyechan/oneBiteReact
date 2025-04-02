const Button = ({ children, tag, text, color = "black" }) => {
  console.log(tag);
  const clickButton = () => {
    console.log(text);
  };
  return (
    <button onClick={clickButton} style={{ color: color }}>
      {text}
      {tag}
      {children}
    </button>
  );
};
export default Button;
