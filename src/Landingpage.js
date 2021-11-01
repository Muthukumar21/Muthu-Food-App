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

function Landingpage(props) {
  var [MealsCard, setMealsCard] = useState(false);
  var [changeVisible, setVisibleChange] = useState(false);
  var [filteredItemsFromMenu, setFilteredItemsFromMenu] = useState([]);
  var [clickedTagName, setClickedTagName] = useState("");

  // function handleTagsClick(nameOfTag) {
  //   setClickedTagName(nameOfTag);
  // }
  debugger;
  function filterTheFoodItem(searchKeyword) {
    let nonVegBasedReduce = props.all_data.reduce((acc, val) => {
      var nonvegsSreach = val.menu_available.non_veg.filter((f) => {
        return f.food_name.includes(searchKeyword);
      });
      acc.push(...nonvegsSreach);
      return acc;
    }, []);

    setFilteredItemsFromMenu(nonVegBasedReduce);
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
              <div>
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
                  <Meta title={e.food_name} description={e.price} />
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
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
            onChange={(e) => {
              debugger;
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
    </div>
  );
}

export default Landingpage;
