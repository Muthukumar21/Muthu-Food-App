import React from "react";
import BreadcrumbPage from "./BreadcrumbPage";
import NavBarPage from "./NavBarPage";
import "./CarryForwadedPage.css";
import CardPage from "./CardPage";
import FillterSection from "./FillterSection";
import {useState} from 'react'

function CarryForwadedPage(props) {
  const [updateState, setUpdateState] = useState(false);
  const [whatKeywordToUpdate, setWhatKeywordToUpdate] = useState("");
  return (
    <div className="CarryForwadedPage">
      <div className="NavBar">
        <NavBarPage all_data={props.all_data}  isUpdateNeeded ={setUpdateState} whatupdate = {setWhatKeywordToUpdate}/>
      </div>
      <div></div>
      <div className="Breadcrumb-bg">
        <BreadcrumbPage />
      </div>
      <div className="filterAndTabs">
        <FillterSection />
      </div>
      <hr />
      <div className="CardPage-bg">
        <CardPage all_data={props.all_data} update_state={whatKeywordToUpdate} />
      </div>
    </div>
  );
}

export default CarryForwadedPage;
