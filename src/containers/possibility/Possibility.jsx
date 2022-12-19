import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request early access to get started</h4>
      <h1 className="gradient__text">Possibility beyond your imagination</h1>
      <p>It goes beyond just using it in your business. You can also dive ino the virtual world and attend parties anywhere in the World, as though you are there physically.</p>
      <h4>Scroll up and input your e-mail for early access.</h4>
    </div>
  </div>;
};

export default Possibility;
