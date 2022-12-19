import React from "react";
import { Feature } from "../../components";
import "./whatGP3.css";

const WhatGP3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="We are so opined to believe that GPT3 is a whole front for the next generation AI. Crafted out of nothing but does everything you can imagine. Once you can wrap your head around it, GPT3 can produce it. It take less than an hour. Friendly for new businesses also."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="It creates an automated chatbot for your business on all platforms for rapid response to customer's queries."
        />
        <Feature
          title="Knowledgebase"
          text="Whatever information you input in its knowledgebase, it gives it back to you or the User with the highest form of accuracy to related questioons asked."
        />
        <Feature
          title="Education"
          text="It also educates its users, and how best to navigate around your app. All that is needed is a registerd account."
        />
      </div>
    </div>
  );
};

export default WhatGP3;
