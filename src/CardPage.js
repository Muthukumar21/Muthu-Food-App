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
    </div>
  );
}

export default CardPage;
