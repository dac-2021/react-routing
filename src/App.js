import "./App.css";
import {
  Route,
  Link,
  useLocation,
  useHistory,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {!["/login", "/signup"].includes(location.pathname) && <Navbar />}

      <Route exact path="/" component={Page1} />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route path="/page4" component={Page4} />
    </>
  );
}

function Login() {
  const history = useHistory();
  return (
    <div>
      <div>Login Page</div>
      <button onClick={(e) => history.push("/")}>Home</button>
      <button onClick={(e) => history.push("/signup")}>Singup</button>
    </div>
  );
}

function Signup() {
  const history = useHistory();
  return (
    <div>
      <div>Singup Page</div>
      <button onClick={(e) => history.push("/")}>Home</button>
      <button onClick={(e) => history.push("/login")}>Login</button>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
      <Link to="/page4">Page4</Link>
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

function Page4() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/page4/page41">Page41</Link>
        <Link to="/page4/page42">Page42</Link>
        <Link to="/page4/page43">Page43</Link>

        <Route path="/" component={Page41} />
        <Route path="/page41" component={Page41} />
        <Route path="/page42" component={Page42} />
        <Route path="/page43" component={Page43} />
      </BrowserRouter>
    </div>
  );
}

function Page41() {
  return <div>Page41</div>;
}

function Page42() {
  return <div>Page42</div>;
}

function Page43() {
  return <div>Page43</div>;
}

export default App;
