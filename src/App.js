import "./App.css";
import Landingpage from "./Landingpage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CarryForwadedPage from "./CarryForwadedPage";

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
  debugger;
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Landingpage all_data={allRestrantMenuData} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/CarryForwadedPage">
            <CarryForwadedPage all_data={allRestrantMenuData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
