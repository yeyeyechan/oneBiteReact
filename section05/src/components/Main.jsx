import "./main.css";
const Main = () => {
  const count = 10;
  const user = {
    name: "seo",
    isLogin: false,
  };
  if (user.isLogin) {
    return <div>{user.name}</div>;
  } else {
    return <div className="login">"login"</div>;
  }
  /* return (
    <main>
      <h1>Main</h1>
      <h2>{user.isLogin ? <div>{user.name}</div> : "login"}</h2>
    </main>
  );*/
};

export default Main;
