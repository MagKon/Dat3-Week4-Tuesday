import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();

  return (
    <>
      <h1 className="display-4">Book</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <p>Book id: {id}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
