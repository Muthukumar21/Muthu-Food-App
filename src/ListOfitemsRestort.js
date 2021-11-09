import React from "react";
import { Card, Rate } from "antd";
import "./ListOfitemsRestort.css";

const { Meta } = Card;
function ListOfitemsRestort(props) {
  console.log(props);
  return (
    <div>
      <div className="cardHolderInfo">
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
        </Card>
        ,
      </div>
    </div>
  );
}

export default ListOfitemsRestort;
