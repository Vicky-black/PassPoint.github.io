import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Main from "./components/Main";
import NavBars from "./components/NavBars";
import Spec from "./components/Spec";

function App() {
  return (
    <div className="App">
      <NavBars />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <About />
      <Features />
      <Spec />
    </div>
  );
}

export default App;
