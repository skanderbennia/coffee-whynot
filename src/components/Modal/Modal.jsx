import React, { useState } from "react";
import "./Modal.css";
import { useContext } from "react";
import modalContext from "../../context/modalContext";
import SubArticle from "../SubArticle/SubArticle";
function Modal() {
  const { modalInformation, setModalInformation } = useContext(modalContext);
  console.log(modalInformation);
  return (
    <div className={`modal ${modalInformation !== null && "show"}`}>
      <div className="header">
        <h1>{modalInformation?.title} </h1>
        <span
          onClick={() => {
            setModalInformation(null);
          }}
        >
          x
        </span>
      </div>
      <div className="body">
        {modalInformation &&
          modalInformation.subArticle?.map((elem) => {
            return <SubArticle title={elem.title} ingrediants={elem.ingrediant} prix={elem.prix} />;
          })}
      </div>
    </div>
  );
}

export default Modal;
