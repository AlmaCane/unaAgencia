import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import { Route, Routes } from "react-router-dom";
import QuienesSomos from "./components/quienesSomos/QuienesSomos.js";
import QueHacemos from "./components/quehacemos/QueHacemos.js";

function App() {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/animacionFondo.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="logo">
        <img className="logo" src="/logo.png" alt="logo" />
      </div>
      <div className="content">
        <QuienesSomos />
        <QueHacemos />
      </div>
    </>
  );
}

export default App;
