import React, { useState, useEffect } from "react";
import { getData } from "../services/apiServices";
import SingleBook from "./SingleBook";

export default function Results({ query }) {
  const [titles, setTitles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [images, setImages] = useState([]);

  const [publishers, setPublishers] = useState([]);
  const [pageCount, setPageCount] = useState([]);
  const [rating, setRating] = useState([]);
  const [ratingsCount, setRatingsCount] = useState([]);

  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (query === "") return;

    getData(
      query,
      setAuthors,
      setTitles,
      setLinks,
      setRating,
      setImages,
      setPageCount,
      setRatingsCount,
      setPublishers
    );
  }, [query]);

  return (
    <div className="results">
      {titles.map((value, index) => {
        return (
          <SingleBook
            titles={value}
            authors={authors[index]}
            images={images[index]}
            publishers={publishers[index]}
            pageCount={pageCount[index]}
            rating={rating[index]}
            ratingsCount={ratingsCount[index]}
            links={links[index]}
            key={index}
          />
        );
      })}
    </div>
  );
}
