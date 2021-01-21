import "./App.css";
import { Route, Link, useLocation, useHistory } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname !== "/login" && <Navbar />}

      <Route exact path="/" component={Page1} />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </>
  );
}

function Login() {
  const history = useHistory();
  return (
    <div>
      <div>Login Page</div>
      <button onClick={(e) => history.push("/")}>Home</button>
    </div>
  );
}

function Signup() {
  return <div>Signup</div>;
}

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
    </>
  );
}

function Page1() {
  return <div>Page1</div>;
}

function Page2() {
  return <div>Page2</div>;
}

function Page3() {
  const history = useHistory();
  return (
    <div>
      <div>Page3</div>
      <button onClick={(e) => history.push("/login")}>Login</button>
    </div>
  );
}

export default App;
