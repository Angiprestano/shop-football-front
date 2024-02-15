import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLogin from "./components/PageLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Homepage from "./components/Home";
import OneNavbar from "./components/OneNavbar";
import TshirtMan from "./components/TshirtMan";
import { useEffect, useState } from "react";

function App() {
  const [jwtToken, setJwtToken] = useState(null);

  useEffect(() => {
    const cachedToken = localStorage.getItem("jwtToken");
    if (cachedToken) {
      setJwtToken(cachedToken);
    }
  }, []);

  const isLoggedIn = true;
  return (
    <BrowserRouter>
      <div>
        {isLoggedIn && <OneNavbar />}
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<PageLogin />}></Route>
          <Route path="/navbar" element={<OneNavbar />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/tshirtMan" element={<TshirtMan />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
