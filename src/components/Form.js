import React, { useState } from "react";

export default function Form({ setQuery }) {
  const [tempQ, setTempQ] = useState("");

  const changeHandler = (e) => {
    setTempQ(e.target.value);
  };

  const clickHandler = (e) => {
    if (tempQ === "") return alert("Please Enter Keyword!");

    setQuery(tempQ);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      clickHandler();
    }
  };

  return (
    <div className="form">
      <div className="ui input">
        <input
          className="ui input"
          type="text"
          placeholder="Enter keywords to find books..."
          onChange={changeHandler}
          onKeyDown={enterHandler}
        />
        <button className="ui button" onClick={clickHandler}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
