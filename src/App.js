import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLogin from "./components/PageLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Homepage from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<PageLogin />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
