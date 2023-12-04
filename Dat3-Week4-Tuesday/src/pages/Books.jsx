import React, { useEffect, useState } from "react";
import bookFacade from "../facade/bookFacade";
import { Link, Outlet } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState(bookFacade.getBooks());
  useEffect(() => {
    setBooks(bookFacade.getBooks());
  }, [books]);

  return (
    <>
      <h1>Books</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>
                  <Link to={"" + book.id} relative="path">
                    {book.title}
                  </Link>
                </td>
                <td>{book.info}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet context={[books, setBooks]} />
    </>
  );
}

export default Books;
