import React from "react";
import { Breadcrumb } from "antd";

function BreadcrumbPage(props) {
  return (
    <div className="BreadcrumbPage">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">CarryForwadedPage</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">RestarantView</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbPage;
