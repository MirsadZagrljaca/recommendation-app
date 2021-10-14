import React, { useState, useEffect } from "react";
import BookHover from "./BookHover";
import BookModal from "./BookModal";

export default function SingleBook({
  titles,
  authors,
  images,
  publishers,
  pageCount,
  rating,
  ratingsCount,
  links,
}) {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="single-result">
      <img src={images} alt="Book" />
      <p className="single-result-title">{titles}</p>
      <p className="single-result-author">{authors}</p>
      <button
        className="details-button"
        onPointerEnter={(e) => setHover(true)}
        onPointerLeave={(e) => setHover(false)}
        onClick={(e) => setModal(true)}
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
      {modal ? (
        <BookModal
          images={images}
          authors={authors}
          titles={titles}
          images={images}
          pageCount={pageCount}
          links={links}
          closeModal={closeModal}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
