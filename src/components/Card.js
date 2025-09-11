import React from "react";

const Card = ({ item }) => {
  return (
    <div className="box">
      <img src={item.img} />
      <hr />
      <div>
        <h4>{item.title}</h4>
        <p>
          <s>{item.mrp}</s> {item.discount}% - {item.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
