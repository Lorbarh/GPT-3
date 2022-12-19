import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving Our Homes with AI",
    text: "It basically just handles turning on your electronics just from a voice command.",
  },
  {
    title: "Improving Our Businesses with AI",
    text: "It basically just automates the content your email replies based on the subject-request of the sender.",
  },
  {
    title: "Improving Our Digital Wellbeing with AI",
    text: "It basically just turns off all app funtionalities on your mobile and computers at a preset time.",
  },
  {
    title: "Improving Our Navigation with AI",
    text: "It basically just uses your Camera in conjuction with GPS to give you real time directions whilst driving."
  }
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into the
          Future Today & Make it Happen.
        </h1>
        <p>Request early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (<Feature title={item.title} text={item.text} key={item.title + index} />))}
      </div>
    </div>
  );
};

export default Features;
