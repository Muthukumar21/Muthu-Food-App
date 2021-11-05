import React from "react";
import BreadcrumbPage from "./BreadcrumbPage";
import NavBarPage from "./NavBarPage";
import "./CarryForwadedPage.css";
import CardPage from "./CardPage";

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
      <div className="CardPage-bg">
        <CardPage />
      </div>
    </div>
  );
}

export default CarryForwadedPage;
