import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pehri from "./Pehri";
import Home from './Home';
import Footer from "./Footer";
import Roadmap from "./Roadmap";
import Mint from "./Mint";
import { useEffect } from "react";

function App() {
  return (
    <Router>
        <Pehri/>
        <Routes>
            <Route path={"/"} exact element={<Home/>} />
            <Route path={"/roadmap"} element={<Roadmap />} />
            <Route path={"/mint"} element={<Mint />} />
        </Routes>
        <Footer/>  
    </Router>
  );
}

export default App;
