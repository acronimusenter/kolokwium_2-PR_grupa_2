import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import Home from "./components/LPhome";
import LPnavbar from "./components/common/LPnavbar";

function App() {

  return (
      <div className="container-fluid">
      <LPnavbar/>
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={Home}/>
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
