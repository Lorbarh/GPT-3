import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date={Date()} title="How AI has been able to match human neurological imitations. It really does go beyond your imagination"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date={Date()} title="AI is the exact replica of the human brain"/>
          <Article imgUrl={blog03} date={Date()} title="It is a chain reaction, it learns and relearns just like human development"/>
          <Article imgUrl={blog04} date={Date()} title="The combination of all letters and numbers to interprete every form of scenario in all areas"/>
          <Article imgUrl={blog05} date={Date()} title="AI being used as a traffic warden to checkmate vehicles not adhering to traffic laws"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
