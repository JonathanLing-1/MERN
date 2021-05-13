import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router"
import Number from "./Components/Number"
import Hello from "./Components/Hello"
import HelloColor from "./Components/HelloColor"
function App() {

  return (
    <>
    Welcome
    <Router>
        <Number path="/:num"/>
        <Hello path="/hello/:word"/>
        <HelloColor path= "/hello/:text/:background"/>
    </Router>
    </>
  );
}

export default App;
