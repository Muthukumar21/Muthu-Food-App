import React, { useState, useEffect } from "react";
import { Badge, Card, Carousel, Rate, Spin, Space, Modal, Button } from "antd";

import "./ListOfitemsRestort.css";
import imagesFoods from "./imagebackend";

const { Meta } = Card;
function ListOfitemsRestort(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [imageTimer, setimageTimer] = useState(false);
  console.log(props);
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
            description={"price : " + props.all_data.price}
          />
          <div className="rateaVotes">
            <Rate
              disabled
              defaultValue={Math.floor(Math.random() * (5 - 1) + 1)}
            />
            <Meta description={props.all_data.votes + " votes"} />
          </div>
          <Button type="danger" onClick={showModal}>
            Add
          </Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some ...</p>
            <p>Some ...</p>
            <p>Some ...</p>
          </Modal>{" "}
        </Card>
        ,
      </div>
    </div>
  );
}

export default ListOfitemsRestort;
