import React, { useEffect, useState } from "react";

export default function MsgBox({ query }) {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (query === "") {
      setBool(true);
    } else {
      setBool(false);
    }
  }, [query]);

  const style = {
    background: bool ? "#1abc9c" : "#f9feff",
    color: bool ? "#f9feff" : "#1abc9c",
  };

  return (
    <div className="msg-box">
      <button className="msg-box-filled" disabled={bool} style={style}>
        {query === "" ? (
          <p className="msg-box-filled-p">
            Search the books and choose recommended
          </p>
        ) : (
          <p className="msg-box-empty">Recommended</p>
        )}
      </button>
    </div>
  );
}
