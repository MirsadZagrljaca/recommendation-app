import React from "react";
import ReactTooltip from "react-tooltip";

export default function BookHover({
  publishers,
  pageCount,
  rating,
  ratingsCount,
}) {
  return (
    <div className="book-tooltip">
      <ReactTooltip
        id="hover"
        className="hover"
        place="right"
        type="light"
        effect="solid"
        multiline={true}
      >
        <p className="hover-publisher">Publisher: {publishers}</p>
        <p className="hover-page-count">Page Count: {pageCount}</p>
        <p className="hover-average-rating">
          Average Rating: {rating === undefined ? "Not Rated Yet" : rating}
        </p>
        <p className="hover-ratings-count">
          Ratings Count:{" "}
          {ratingsCount === undefined ? "Not Rated Yet" : ratingsCount}
        </p>
      </ReactTooltip>
    </div>
  );
}
