import React from "react";
const Card = ({ book }) => {
  let bookCover = JSON.stringify(book.formats)
    .slice(
      JSON.stringify(book.formats).indexOf("image/jpeg"),
      JSON.stringify(book.formats).indexOf(".jpg")
    )
    .replace('image/jpeg":"', "")
    .concat(".jpg");
  return (
    <div className="card">
      <div className="image">
        <img src={bookCover} alt="s" />
      </div>
      <div className="card-data">
        <h3>
          {book.title.slice(0, 15).concat(book.title.length > 15 ? "..." : "")}
        </h3>
        <span>{book.authors.length > 0 ? book.authors[0].name : ""}</span>
        <div>{book.languages.map((lang) => lang)}</div>
      </div>
    </div>
  );
};

export default Card;
