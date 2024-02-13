import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLogin from "./components/PageLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PageLogin />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
