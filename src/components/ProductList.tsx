import React from "react";
import Card from "./Card";
import useBooks from "../hooks/useBooks";
import { Link } from "react-router-dom";
import Spinnner1 from "./spinner/SpinnerOne";
const ProductList = () => {
  const [books, , isLoading] = useBooks(1);

  const renderedListOfBooks = (): any[] => {
    return (books as unknown as any[]).map((book, i: Number) => {
      if (i < 7) {
        return <Card key={book.id} book={book} />;
      } else {
        return null;
      }
    });
  };

  return (
    <div className="product-list">
      {isLoading && <Spinnner1 />}
      <div className="info">
        <h2>Popular now</h2>
        <Link to="/all-books">
          <span>View all</span>
        </Link>
      </div>
      <div className="p-list">{renderedListOfBooks()}</div>
    </div>
  );
};

export default ProductList;
