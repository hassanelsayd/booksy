import React, { useState } from "react";
import Card from "../components/Card";
import SpinnerOne from "../components/spinner/SpinnerOne";
import useBooks from "../hooks/useBooks";
export default function AllBooks() {
  const [pageNumber, setPageNumber] = useState(1);
  const [books, isNext, isLoading] = useBooks(pageNumber);
  const renderedListOfBooks = (): any[] => {
    return (books as unknown as any[]).map((book, i: Number) => {
      return <Card key={book.id} book={book} />;
    });
  };

  return (
    <div className="all-books">
      {isLoading && <SpinnerOne />}

      <div className="p-list">{renderedListOfBooks()}</div>
      <div className="paging">
        {pageNumber > 1 && (
          <button onClick={() => setPageNumber(pageNumber - 1)}>
            Previous
          </button>
        )}
        {isNext && (
          <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}
