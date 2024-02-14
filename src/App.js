import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLogin from "./components/PageLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Homepage from "./components/Home";
import { Navbar } from "react-bootstrap";
import OneNavbar from "./components/OneNavbar";

function App() {
  const isLoggedIn = true;
  return (
    <BrowserRouter>
      <div>
        {isLoggedIn && <OneNavbar />}
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<PageLogin />}></Route>
          <Route path="/navbar" element={<OneNavbar />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
