import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Body from './Body';
import Footer from "./Footer";
import Roadmap from "./Roadmap";
import Mint from "./Mint";

function App() {
  return (
    <Router>
    <div>
        <Header/>
        <Switch>
          <Route path={"/"} exact component={Body}></Route>
          <Route path={"/roadmap"} component={Roadmap}></Route>
          <Route path={"/mint"} component={Mint}></Route>
        </Switch>
        <Footer/>  
    </div> 
    </Router>
  );
}

export default App;
