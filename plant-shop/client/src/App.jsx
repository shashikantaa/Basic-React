import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Addplant from "./pages/Addplant";
import Editplant from "./pages/Editplant";
import Addcategory from "./pages/Addcategory";
import Viewcategory from "./pages/Viewcategory";
import Editcategory from "./pages/Editcategory";
import Viewplant from "./pages/Viewplant";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addplant" element={<Addplant />}></Route>
        <Route path="/editplant" element={<Editplant />}></Route>
        <Route path="/addcategory" element={<Addcategory />}></Route>
        <Route path="/viewcategory" element={<Viewcategory />}></Route>
        <Route path="/editcategory/:id" element={<Editcategory />}></Route>
        <Route path="/viewplant" element={<Viewplant />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
