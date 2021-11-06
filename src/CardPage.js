import React from "react";
import { Card } from "antd";

const { Meta } = Card;
function CardPage(props) {
  return (
    <div className="CardPage">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      ,
      {/* {props.all_data.map((f) => (
        <div className="rowcard">
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
            <Meta title={f.food_name} description={f.price} />
          </Card>
        </div>
      ))} */}
    </div>
  );
}

export default CardPage;
