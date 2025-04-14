import "./Header.css";

const Header = ({ left_child, right_child, title }) => {
  return (
    <div className="Header">
      <div className="left_child">{left_child}</div>
      <div className="title">{title}</div>
      <div className="right_child">{right_child}</div>
    </div>
  );
};

export default Header;
