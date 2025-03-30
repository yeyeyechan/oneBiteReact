const Button = ({ children, tag, text, color = "black" }) => {
  console.log(tag);
  return (
    <button style={{ color: color }}>
      {text}
      {tag}
      {children}
    </button>
  );
};
export default Button;
