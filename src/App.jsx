import Index from "./pages/index";
import ThrashMetalInfo from "./pages/thrash-metal";
import HeavyMetalInfo from "./pages/heavy-metal";
import "./styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// yarn add react-router-dom

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/thrash-metal">
            <ThrashMetalInfo />
          </Route>
          <Route path="/heavy-metal">
            <HeavyMetalInfo />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
