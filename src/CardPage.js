import React, { useEffect, useState } from "react";
import { Badge, Card, Carousel, Rate, Spin, Space } from "antd";
import "./CardPage.css";
import imagesFoods from "./imagebackend";

import { useHistory } from "react-router-dom";

const { Meta } = Card;
const contentStyle = {
  height: "50px",
  color: "black",
  // lineHeight: "160px",
  textAlign: "center",
  padding: "10px",
  margintop: "15px",
  background: "#fff",
};
function CardPage(props) {
  let history = useHistory();
  let historycarry = useHistory();
  const [hotelBasedOnkeyWord, setHotelBasedOnkeyWord] = useState([]);
  useEffect(() => {
    let backendData = props.all_data;
    let filteredItem = backendData
      .map((o) => {
        let sreachAllData = o.menu_available.non_veg.filter((e) => {
          return e.food_name.includes(historycarry.location.state);
        });
        if (sreachAllData.length > 0) {
          return { ...o };
        }
      })
      .filter((h) => {
        return h != undefined;
      });
    filteredItem.forEach((a) => {
      a.imageOfBackendData = imagesFoods[Math.floor(Math.random() * 19)];
    });
    setTimeout(() => {
      setHotelBasedOnkeyWord(filteredItem);
    }, 1000);
  }, []);
  function handleCarryClick(clickedObj) {
    history.push({
      pathname: "/resort",
      state: clickedObj,
    });
    console.log(clickedObj);
  }

  return (
    <div>
      {hotelBasedOnkeyWord == 0 ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        <div>
          <div className="nameOfTheRestarant">
            <h1>
              {historycarry.location.state} Delivery Restaurants in T. Nagar.
            </h1>
          </div>
          <div className="CardPage">
            {hotelBasedOnkeyWord.map((f) => (
              <div
                className="rowcard"
                onClick={() => {
                  handleCarryClick(f);
                }}
              >
                <Badge.Ribbon
                  text={f.offer_available.split("-")[0] + " Off"}
                  placement="start"
                  color="green"
                >
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src={f.imageOfBackendData} />}
                  >
                    <div className="deliveryMinutes">
                      <Badge
                        style={{ backgroundColor: "#d7dad6", color: "black" }}
                        count={Math.floor(Math.random() * 30) + " mins"}
                      />
                    </div>
                    <div className="CardPageMeta">
                      <Meta
                        title={f.hotel_name}
                        description={f.average_price_to_order}
                      />
                    </div>
                    <div className="CardPageRate">
                      <Rate
                        disabled
                        defaultValue={Math.floor(Math.random() * (5 - 1) + 1)}
                      />
                    </div>
                    <div className="CardPageSlider">
                      <Carousel autoplay effect="fade">
                        <div className="slider1Image">
                          <img
                            src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
                            alt="not found"
                          />
                          <h5 style={contentStyle}>
                            525+ orders placed from here recently
                          </h5>
                        </div>
                        <div className="slider2Image">
                          <h5 style={contentStyle}>
                            Follows all Max Safety measures @Food
                          </h5>
                          <img
                            src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png"
                            alt="not found"
                          />
                        </div>
                      </Carousel>
                    </div>
                  </Card>
                </Badge.Ribbon>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardPage;
