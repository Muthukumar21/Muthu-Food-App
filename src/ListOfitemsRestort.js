import React, { useState, useEffect } from "react";
import { Badge, Card, Button, Carousel, Rate, Spin, Space } from "antd";

import "./ListOfitemsRestort.css";
import imagesFoods from "./imagebackend";

const { Meta } = Card;
function ListOfitemsRestort(props) {
  const [imageTimer, setimageTimer] = useState(false);
  console.log(props);
  useEffect(() => {
    setTimeout(() => {
      setimageTimer(true);
    }, 3000);
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
            description={"price : " + props.all_data.price}
          />
          <div className="rateaVotes">
            <Rate
              disabled
              defaultValue={Math.floor(Math.random() * (5 - 1) + 1)}
            />
            <Meta description={props.all_data.votes + " votes"} />
          </div>
          <Button danger>ADD</Button>
        </Card>
        ,
      </div>
    </div>
  );
}

export default ListOfitemsRestort;
