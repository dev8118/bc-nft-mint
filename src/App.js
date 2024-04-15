import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pehri from "./Pehri";
import Body from './Body';
import Footer from "./Footer";
import Roadmap from "./Roadmap";
import Mint from "./Mint";

function App() {
  return (
    <Router>
        <Pehri/>
        <Routes>
            <Route path={"/"} exact element={<Body/>} />
            <Route path={"/roadmap"} element={<Roadmap />} />
            <Route path={"/mint"} element={<Mint />} />
        </Routes>
        <Footer/>  
    </Router>
  );
}

export default App;
