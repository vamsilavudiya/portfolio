import React from "react";
import "./css/main.css";
import Left from "../../assets/images/Left_Arrow.svg";
import Right from "../../assets/images/rightarrow.svg";

function Main() {
  return (
    <div className="main">
      <div className="name">
        <img src={Left} alt="lefttarrow" />
        <span></span>
        <h1>Developer</h1>
        <img src={Right} alt="right arrow" />
      </div>
      <h2>//  A Freelance UX/UI Developer and also Design as Well  //</h2>
    </div>
  );
}

export default Main;
