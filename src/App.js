// import logo from "./public/logo.png";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </>
  );
}

export default App;
