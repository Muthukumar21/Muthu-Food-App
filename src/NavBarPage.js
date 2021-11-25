import "./NavBarPage.css";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { Image } from "antd";
import { Popover } from "antd";
import { Tag } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";
import { useState } from "react";
import { Card } from "antd";
import { Avatar } from "antd";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import imagesFoods from "./imagebackend";
import { useHistory } from "react-router-dom";

const { Meta } = Card;
const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const text = <span>Recent tab</span>;

function NavBarPage(props) {
  let history = useHistory();
  var [MealsCard, setMealsCard] = useState(false);
  var [changeVisible, setVisibleChange] = useState(false);
  var [filteredItemsFromMenu, setFilteredItemsFromMenu] = useState([]);
  var [clickedTagName, setClickedTagName] = useState("");

  // function handleTagsClick(nameOfTag) {
  //   setClickedTagName(nameOfTag);
  // }
  function filterTheFoodItem(searchKeyword) {
    let nonVegBasedReduce = props.all_data.reduce((acc, val) => {
      var nonvegsSreach = val.menu_available.non_veg.filter((f) => {
        return f.food_name.toUpperCase().includes(searchKeyword.toUpperCase());
      });
      acc.push(...nonvegsSreach);
      return acc;
    }, []);

    let objOfFoodData = nonVegBasedReduce[0].food_name
      .split(" ")
      .map((e) => {
        if (e.toUpperCase().indexOf(searchKeyword.toUpperCase()) != -1)
          return e;
      })
      .filter((o) => {
        return o != undefined;
      })[0];
    let unshiftObj = {
      food_name: objOfFoodData,
      votes: "100",
      price: "200",
      category: "Category",
    };
    nonVegBasedReduce.unshift(unshiftObj);
    nonVegBasedReduce.forEach((a) => {
      a.imageOfBackendData = imagesFoods[Math.floor(Math.random() * 19)];
    });

    setFilteredItemsFromMenu(nonVegBasedReduce);
    console.log(setFilteredItemsFromMenu(nonVegBasedReduce));
  }

  function handleclickable(uniqueCardData) {
    debugger
    props.isUpdateNeeded(true);
    history.push({
      pathname: "/CarryForwadedPage",
      state: uniqueCardData.food_name,
    });
    props.whatupdate(uniqueCardData.food_name)
  }
  function changeVisiblePopUp() {
    setVisibleChange(true);
  }
  function toHide() {
    setVisibleChange(false);
  }
  function tagsOfPopUp() {
    return (
      <div>
        {MealsCard == false ? (
          <div>
            <Tag closable>
              <a
                // onClick={(e) => {
                //   setClickedTagName(e.currentTarget.innerText);
                // }}
                href="#"
              >
                Link
              </a>
            </Tag>
          </div>
        ) : (
          <div className="cardHolder">
            {filteredItemsFromMenu.map((e) => (
              <div
                className="card"
                onClick={() => {
                  handleclickable(e);
                }}
              >
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="not found" src={e.imageOfBackendData} />}
                >
                  <Meta
                    title={e.food_name}
                    description={e.category ? e.category : e.price}
                  />
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="NavBarPage">
      <div className="titleNavName">
        <h3>ZOMATO</h3>
      </div>
      <div className="sreachinput">
        <Popover
          placement="bottom"
          title={text}
          visible={changeVisible}
          onVisibleChange={changeVisiblePopUp}
          trigger="click"
          // onBlur={toHide}
          content={tagsOfPopUp}
        >
          <Search
            onChange={(e) => {
              filterTheFoodItem(e.currentTarget.value);
              setMealsCard(true);
            }}
            // onBlur={toHide}
            placeholder="input search text"
            allowClear
            size="large"
            //   onSearch={onSearch}
            style={{ width: 500 }}
          />
        </Popover>
      </div>
      <div className="Avatar">
        <Avatar
          src={
            <Image
              src="https://joeschmoe.io/api/v1/random"
              style={{
                width: 32,
              }}
            />
          }
        />
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            SIGN UP / LOGIN <DownOutlined />
          </a>
        </Dropdown>
      </div>
      ;
    </div>
  );
}

export default NavBarPage;
