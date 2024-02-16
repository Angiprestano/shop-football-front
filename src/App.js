import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLogin from "./components/PageLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Homepage from "./components/Home";
import OneNavbar from "./components/OneNavbar";
import TshirtMan from "./components/TshirtMan";
import { useEffect, useState } from "react";
import Accessories from "./components/Accessories";
import SweatShirtMan from "./components/SweatshirtMan";
import SweatShirtWomen from "./components/SweatshirtWomen";
import PajamasWomen from "./components/PajamasWomen";
import PajamasMan from "./components/PajamasMan";
import SuitMan from "./components/SuitMan";
import SuitWomen from "./components/SuitWoman";

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
          <Route path="/" element={<PageLogin />}></Route>
          <Route path="/navbar" element={<OneNavbar />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/tshirtMan" element={<TshirtMan />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/sweatshirtMan" element={<SweatShirtMan />}></Route>
          <Route path="/sweatshirtWomen" element={<SweatShirtWomen />}></Route>
          <Route path="/pajamasWomen" element={<PajamasWomen />}></Route>
          <Route path="/pajamasMan" element={<PajamasMan />}></Route>
          <Route path="/suitMan" element={<SuitMan />}></Route>
          <Route path="/suitWomen" element={<SuitWomen />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
