import React from "react";
import { Popover, Button } from "antd";
import { Tag } from "antd";
import "./FillterSection.css";

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
function FillterSection(props) {
  return (
    <div className="FillterSection">
      <div className="FillterSection1">
        <div className="filterPopover">
          <Popover
            placement="rightTop"
            title={text}
            content={content}
            trigger="click"
          >
            <Button size="large">Fillter</Button>
          </Popover>
        </div>
        <div className="filterTags">
          <Tag
            closable
            // onClose={log}
          >
            Tag 2
          </Tag>
          <Tag
            closable
            // onClose={log}
          >
            Tag 2
          </Tag>{" "}
          <Tag
            closable
            // onClose={log}
          >
            Tag 2
          </Tag>
        </div>
      </div>
      <div className="FillterSection2"></div>
    </div>
  );
}

export default FillterSection;
