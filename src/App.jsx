import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./Home";
import About from "./About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about/"} element={<About />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
