import React, { useState } from "react";
import "./Article.css";
import Modal from "../Modal/Modal";
function Article({ image, title, onClick }) {
  return (
    <div className="article">
      <Modal />
      <img height={250} width={300} src={image} alt={title} onClick={onClick} />
      <h3> {title}</h3>
    </div>
  );
}

export default Article;
