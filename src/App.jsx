import { ArweaveWalletKit } from "arweave-wallet-kit";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./Home";
import About from "./About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <ArweaveWalletKit>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about/"} element={<About />} />
          </Routes>
        </HashRouter>
      </ArweaveWalletKit>
    </>
  )
}

export default App
