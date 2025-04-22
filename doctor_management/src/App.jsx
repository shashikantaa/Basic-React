import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./pages/Signup";
import Book from "./pages/Book";
import Login from "./pages/Login";
import History from "./pages/History";
import Editpage from "./pages/Editpage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="book" element={<Book />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/edit/:id" element={<Editpage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
