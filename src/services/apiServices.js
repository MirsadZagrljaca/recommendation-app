import axios from "axios";

export function getData(
  query,
  setAuthors,
  setTitles,
  setLinks,
  setRating,
  setImages,
  setPageCount,
  setRatingsCount,
  setPublishers
) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

  axios
    .get(URL)
    .then((response) => {
      const tempAuthors = response.data.items.map((obj) =>
        obj.volumeInfo.authors.toString()
      );
      setAuthors(tempAuthors);

      const tempTitles = response.data.items.map((obj) => obj.volumeInfo.title);
      setTitles(tempTitles);

      const tempLinks = response.data.items.map(
        (obj) => obj.volumeInfo.canonicalVolumeLink
      );
      setLinks(tempLinks);

      const tempRatings = response.data.items.map(
        (obj) => obj.volumeInfo.averageRating
      );
      setRating(tempRatings);

      const tempImages = response.data.items.map(
        (obj) => obj.volumeInfo.imageLinks.thumbnail
      );
      setImages(tempImages);

      const tempPageCount = response.data.items.map(
        (obj) => obj.volumeInfo.pageCount
      );
      setPageCount(tempPageCount);

      const tempRatingsCount = response.data.items.map(
        (obj) => obj.volumeInfo.ratingsCount
      );
      setRatingsCount(tempRatingsCount);

      const tempPublisher = response.data.items.map(
        (obj) => obj.volumeInfo.publisher
      );
      setPublishers(tempPublisher);
    })
    .catch((reason) => console.log(reason));
}
