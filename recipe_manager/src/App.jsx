import AddRecipe from "./pages/AddRecipe";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewRecipe from "./pages/ViewRecipe.jsx";
import EditRecipe from "./pages/EditRecipe.jsx";
import SingleView from "./pages/SingleView.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addrecipe" element={<AddRecipe />}></Route>
        <Route path="/viewrecipe" element={<ViewRecipe />}></Route>
        <Route path="/editrecipe/:id" element={<EditRecipe />}></Route>
        <Route path="/singlerecipe/:id" element={<SingleView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
