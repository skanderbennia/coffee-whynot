import React from "react";
import "./SubArticle.css";
function SubArticle({ title, ingrediants, prix }) {
  return (
    <div className="subArticle">
      <ul className="product">
        <li>{title}</li>
        <h5>{ingrediants}</h5>
      </ul>
      <span>
        {prix}
        <sup>DT</sup>
      </span>
    </div>
  );
}

export default SubArticle;
