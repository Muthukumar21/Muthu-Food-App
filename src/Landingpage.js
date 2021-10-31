import "./Landingpage.css";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { Image } from "antd";
import { Popover } from "antd";
import { Tag } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";
import { useState } from "react";
import { Card } from "antd";

const { Meta } = Card;
const { Search } = Input;

const text = <span>Recent tab</span>;
// function content() {

//   setChange == false ? (
//     <div>
//       <Tag closable>
//         <a href="#">link</a>
//       </Tag>
//     </div>
//   ) : (
//     "text"
//   );
// }
function Landingpage() {
  var [mealsCard, setMealsCard] = useState(false);
  var [changeVisible, setVisibleChange] = useState(false);
  function changeVisiblePopUp() {
    setVisibleChange(true);
  }
  function toHide() {
    setVisibleChange(false);
  }
  function tagsOfPopUp() {
    return setMealsCard == false ? (
      <div>
        <Tag closable>
          <a href="https://github.com/ant-design/ant-design/issues/1862">
            Link
          </a>
        </Tag>
        <Tag closable>
          <a href="https://github.com/ant-design/ant-design/issues/1862">
            Link
          </a>
        </Tag>
      </div>
    ) : (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://b.zmtcdn.com/data/images/cuisines/unlabelled/8f14e45fceea167a5a36dedd4bea2543.jpg"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    );
  }
  return (
    <div className="Landingpage">
      <div className="companyTitle">
        <Image
          width={200}
          preview={false}
          block
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
        />
      </div>
      <div className="companyDescription">
        <p>
          Discover the best food & drinks in{" "}
          <span className="cityHighlight"> Chennai</span>{" "}
        </p>
      </div>
      <div className="sreachinput">
        <Popover
          placement="bottom"
          title={text}
          visible={changeVisible}
          onVisibleChange={changeVisiblePopUp}
          trigger="click"
          content={tagsOfPopUp}
        >
          <Search
            // onChange={change}
            // onBlur={toHide}
            placeholder="input search text"
            allowClear
            size="large"
            //   onSearch={onSearch}
            style={{ width: 500 }}
          />
        </Popover>
      </div>
    </div>
  );
}

export default Landingpage;
