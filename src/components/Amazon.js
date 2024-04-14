import React from "react";
import list from "../db/Db";
import "./Amazon.css";
import Card from "../components/Card";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
