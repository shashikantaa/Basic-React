import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import shot from "./components/modules.js";
import { display } from "./components/modules.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Es66 from "./pages/Es66.jsx";
import Mui from "./components/Mui.jsx";
import Hooks from "./pages/Hooks.jsx";
import Firstcom from "./components/Firstcom.jsx";
import props from "./components/props.jsx";

function App() {
  shot();
  display();
  return (
    <>
      {/* <ArrowFunctions />
      <h1 className="h">hello</h1>
      <Map />
      <Task />
      <Footer />
      <Spreadoperator />
      <Ternaryoperator />
      <Destructuring />
      <p>{name}</p>
      <p>{address}</p>
      <p>{age}</p>
      <Display name="jhon" age="34" address="phaknung" tel="7085199532" />
      {/* passing value multiple time 
      <Display name="shahil" age={age} address="sawombung" tel="7085199532" />
      <Display name="shashi" age="26" address="guja" tel="7085199532" />
      <Firstcom />
      <Event /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/es66" element={<Es66 />}></Route>
          <Route path="/mui" element={<Mui />}></Route>
          <Route path="/hooks" element={<Hooks />}></Route>
          <Route path="/Firstcom" element={<Firstcom />}></Route>
          <Route path="/props" element={<props />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
//react router dom to navigate defferent pages
//use MUI to get react readymade
