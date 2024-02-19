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
import TshirtWomen from "./components/TshirtWomen";
import TshirtKids from "./components/TshirtKids";
import FelpaKids from "./components/FelpaKids";
import PajamasKids from "./components/PajamasKids";
import SetWomen from "./components/SetWomen";
import SetMan from "./components/SetMan";
import MyCart from "./components/MyCart";
import PantsMan from "./components/PantsMan";
import SuitKids from "./components/SuitKids";
import SetKids from "./components/SetKids";
import Orders from "./components/Orders";

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
          <Route path="/tshirtWomen" element={<TshirtWomen />}></Route>
          <Route path="/tshirtKids" element={<TshirtKids />}></Route>
          <Route path="/felpaKids" element={<FelpaKids />}></Route>
          <Route path="/pajamasKids" element={<PajamasKids />}></Route>
          <Route path="/setDonna" element={<SetWomen />}></Route>
          <Route path="/setUomo" element={<SetMan />}></Route>
          <Route path="/pantsMan" element={<PantsMan />}></Route>
          <Route path="/suitKids" element={<SuitKids />}></Route>
          <Route path="/setKids" element={<SetKids />}></Route>
          <Route path="/cart" element={<MyCart />}></Route>
          <Route path="/order" element={<Orders />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
