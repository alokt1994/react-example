// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
// import PackingList from "./Conditional/Conditional";
function App() {
  return (
    <div className="App-header">
      <Navbar className="App-header" />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
