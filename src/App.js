import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLogin from "./components/PAGE/PageLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/PAGE/Register";
import Homepage from "./components/PAGE/Home";
import OneNavbar from "./components/PAGE/OneNavbar";
import TshirtMan from "./components/MAN/TshirtMan";
import { useEffect, useState } from "react";
import Accessories from "./components/PAGE/Accessories";
import SweatShirtMan from "./components/MAN/SweatshirtMan";
import SweatShirtWomen from "./components/WOMEN/SweatshirtWomen";
import PajamasWomen from "./components/WOMEN/PajamasWomen";
import PajamasMan from "./components/MAN/PajamasMan";
import SuitMan from "./components/MAN/SuitMan";
import SuitWomen from "./components/WOMEN/SuitWoman";
import TshirtWomen from "./components/WOMEN/TshirtWomen";
import TshirtKids from "./components/KIDS/TshirtKids";
import FelpaKids from "./components/KIDS/FelpaKids";
import PajamasKids from "./components/KIDS/PajamasKids";
import SetWomen from "./components/WOMEN/SetWomen";
import SetMan from "./components/MAN/SetMan";
import MyCart from "./components/PAGE/MyCart";
import PantsMan from "./components/MAN/PantsMan";
import SuitKids from "./components/KIDS/SuitKids";
import SetKids from "./components/KIDS/SetKids";
import Orders from "./components/PAGE/Orders";
import SaleTshirt from "./components/PAGE/SaleTshirt";

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
          <Route path="/orders/:idOrder" element={<Orders />}></Route>
          <Route path="/salesTshirt" element={<SaleTshirt />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
