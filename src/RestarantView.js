import React, { useState } from "react";
import BreadcrumbPage from "./BreadcrumbPage";
import ListOfitemsRestort from "./ListOfitemsRestort";
import NavBarPage from "./NavBarPage";
import ResortPageHeaderImageFolder from "./ResortPageHeaderImageFolder";
import "./RestarantView.css";
import { Rate, Badge } from "antd";

import { useHistory } from "react-router-dom";

function RestarantView(props) {
  const [updateState, setUpdateState] = useState(false);
  const [whatKeywordToUpdate, setWhatKeywordToUpdate] = useState("");
  let history = useHistory();
  debugger;
  let getDataOfHotel = history.location.state;
  console.log(getDataOfHotel);
  return (
    <div className="resortPage">
      <div className="resortPageNavPage">
        <NavBarPage
          all_data={props.all_data}
          isUpdateNeeded={setUpdateState}
          whatupdate={setWhatKeywordToUpdate}
        />
      </div>
      <div className="resortPageBreadcrumbpage">
        <BreadcrumbPage />
      </div>
      <div className="resortPageCardPage">
        <ResortPageHeaderImageFolder />
      </div>
      <div className="resortPageGridCss">
        <div className="resortPageRestarantDetails">
          <h1>{getDataOfHotel.hotel_name}</h1>
          <h3>{getDataOfHotel.average_price_to_order}</h3>
          <h4>{getDataOfHotel.kind_of_food_available}</h4>
          <h5>place/destric</h5>
        </div>
        <div className="resortPageRate">
          <div className="resortPageDeliveryMinutes">
            <Badge
              style={{ backgroundColor: "#d7dad6", color: "black" }}
              count={Math.floor(Math.random() * 30) + " mins"}
            />
          </div>
          <Rate
            disabled
            defaultValue={Math.floor(Math.random() * (5 - 1) + 1)}
          />
        </div>
      </div>
      <div className="resortPageDivider"></div>

      <div className="resortPageListOfitemsInARestortHeading">
        <div className="resortPageListOfitemsInARestort">
          {Object.keys(getDataOfHotel.menu_available).map((o) =>
            getDataOfHotel.menu_available[o].map((t) => (
              <ListOfitemsRestort all_data={t} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RestarantView;
