import Index from "./pages/index";
import ThrashMetalInfo from "./pages/thrash-metal";
import HeavyMetalInfo from "./pages/heavy-metal";
import BlackMetalInfo from "./pages/black-metal";
import DeathMetalInfo from "./pages/death-metal";
import PowerMetalInfo from "./pages/power-metal";
import IndustrialMetalInfo from "./pages/industrial-metal";
import GrindcoreInfo from "./pages/grindcore";
import GothicMetalInfo from "./pages/gothic-metal";
import FolkMetalInfo from "./pages/folk-metal";
import DoomMetalInfo from "./pages/doom-metal";
import ProgressiveMetalInfo from "./pages/progressive-metal";
import NuMetalInfo from "./pages/nu-metal";
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
          <Route path="/black-metal">
            <BlackMetalInfo />
          </Route>
          <Route path="/death-metal">
            <DeathMetalInfo />
          </Route>
          <Route path="/power-metal">
            <PowerMetalInfo />
          </Route>
          <Route path="/industrial-metal">
            <IndustrialMetalInfo />
          </Route>
          <Route path="/grindcore">
            <GrindcoreInfo />
          </Route>
          <Route path="/gothic-metal">
            <GothicMetalInfo />
          </Route>
          <Route path="/folk-metal">
            <FolkMetalInfo />
          </Route>
          <Route path="/doom-metal">
            <DoomMetalInfo />
          </Route>
          <Route path="/progressive-metal">
            <ProgressiveMetalInfo />
          </Route>
          <Route path="/nu-metal">
            <NuMetalInfo />
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
