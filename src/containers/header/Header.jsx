import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Let us take you to the next level in Artificial Intelligence.
          Intelligence like no other. AI doesn't have to be evil to take away
          human efforts, more or less to say the development of full artificial
          intelligence could spell the end of the human race.....it would
          take-off on its own, and re-design itself at an ever increasing rate.
          So, what are you waiting for? Input your email below and lets take you
          to the next level.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your e-mail address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access to a visit in the last 24 hours</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
