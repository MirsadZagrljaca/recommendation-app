import React, { useState } from "react";
import BookHover from "./BookHover";

export default function SingleBook({
  titles,
  authors,
  images,
  publishers,
  pageCount,
  rating,
  ratingsCount,
  index,
}) {
  const [hover, setHover] = useState(false);

  return (
    <div className={"single-result " + index}>
      <img src={images} alt="Book" />
      <p className="single-result-title">{titles}</p>
      <p className="single-result-author">{authors}</p>
      <button
        className="details-button"
        onPointerEnter={(e) => setHover(true)}
        onPointerLeave={(e) => setHover(false)}
        onClick={(e) => setHover(!hover)}
        data-for="hover"
        data-tip="Hello<br />multiline<br />tooltip"
        data-iscapture="true"
      >
        Details
      </button>
      {hover ? (
        <BookHover
          publishers={publishers}
          pageCount={pageCount}
          rating={rating}
          ratingsCount={ratingsCount}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
