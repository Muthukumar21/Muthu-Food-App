import React, { useState, useEffect } from "react";
import { Card, Rate, Spin, Space, Button } from "antd";

import "./ListOfitemsRestort.css";
import imagesFoods from "./imagebackend";

const { Meta } = Card;
function ListOfitemsRestort(props) {
  const [count, setCount] = useState(1);

  const [imageTimer, setimageTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setimageTimer(true);
    }, 2000);
  }, []);
  return (
    <div>
      <div className="cardHolderInfo">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <div>
              {imageTimer ? (
                <img
                  alt="example"
                  src={imagesFoods[Math.floor(Math.random() * 19)]}
                />
              ) : (
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              )}
            </div>
          }
        >
          <Meta
            title={props.all_data.food_name}
            description={"price : " + "₹" + props.all_data.price}
          />
          <div className="rateaVotes">
            <Rate
              disabled
              defaultValue={Math.floor(Math.random() * (5 - 1) + 1)}
            />
            <Meta description={props.all_data.votes + " votes"} />
          </div>
          <div className="cart_button">
            <Button type="danger">Add</Button>
            <Button
              className="cart_button_plus"
              type="danger"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
            <Button type="danger" className="cart_button_number">
              {count < 1 ? 1 : count}
            </Button>
            <Button
              type="danger"
              className="cart_button_minus"
              onClick={() => setCount(count - 1)}
            >
              -
            </Button>
          </div>
        </Card>
        ,
      </div>
    </div>
  );
}

export default ListOfitemsRestort;
