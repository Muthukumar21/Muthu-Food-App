import "./App.css";
import Landingpage from "./Landingpage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  var [allRestrantMenuData, setAllRestrantMenuData] = useState([]);
  debugger;
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
    <div className="App">
      <Landingpage all_data={allRestrantMenuData} />
    </div>
  );
}

export default App;
