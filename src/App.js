import "./App.css";
import Landingpage from "./Landingpage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LinkPage from "./LinkPage";

function App() {
  var [allRestrantMenuData, setAllRestrantMenuData] = useState([]);
  useEffect(() => {
    async function getFoodData() {
      var foodData = await axios.get(
        "https://rcz-backend-arvinth.herokuapp.com/api/allResorts"
      );
      console.log(foodData.data);
      setAllRestrantMenuData(foodData.data);
    }

    getFoodData();
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Landingpage all_data={allRestrantMenuData} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/limkpage">
            <LinkPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
