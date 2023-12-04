import React from "react";
import { NavLink, Navigate } from "react-router-dom";

function Header() {
  function searchBooks(event) {
    event.preventDefault();
    const search = document.getElementById("search").value;
    if (search !== "") {
      let location = "/books/" + search;
      window.location.href = location;
    }
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/books"
                >
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="addbook">
                  Add a book
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={searchBooks}
              >
                Search books
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
