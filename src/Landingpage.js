import "./Landingpage.css";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { Popover } from "antd";
import { Tag } from "antd";
import imagesFoods from "./imagebackend";
import { useState } from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";

const { Meta } = Card;
const { Search } = Input;

const text = <span>Recent tab</span>;

function Landingpage(props) {
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
      a.imageOfBackendData = imagesFoods[Math.floor(Math.random() * 13)];
    });
    console.log(setFilteredItemsFromMenu(nonVegBasedReduce));
  }

  function handleclickable(uniqueCardData) {
    history.push({
      pathname: "/CarryForwadedPage",
      state: uniqueCardData.food_name,
    });
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
                  cover={
                    <img
                      alt="not found"
                      src="https://b.zmtcdn.com/data/images/cuisines/unlabelled/8f14e45fceea167a5a36dedd4bea2543.jpg"
                    />
                  }
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
    <div className="Landingpage">
      <div className="bg-image">
        <div className="companyTitle">
          <b>zomato</b>
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
      </div>
    </div>
  );
}

export default Landingpage;
