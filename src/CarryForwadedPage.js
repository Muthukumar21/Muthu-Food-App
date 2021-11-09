import React from "react";
import BreadcrumbPage from "./BreadcrumbPage";
import NavBarPage from "./NavBarPage";
import "./CarryForwadedPage.css";
import CardPage from "./CardPage";
import FillterSection from "./FillterSection";

function CarryForwadedPage(props) {
  return (
    <div className="CarryForwadedPage">
      <div className="NavBar">
        <NavBarPage all_data={props.all_data} />
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
        <CardPage all_data={props.all_data} />
      </div>
    </div>
  );
}

export default CarryForwadedPage;
