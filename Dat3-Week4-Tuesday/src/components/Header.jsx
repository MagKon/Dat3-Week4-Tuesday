import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = React.useState("");
  function searchBooks() {
    const search = document.getElementById("search")?.value ?? "";
    if (search !== "") {
      return search;
    }
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        onSubmit={(e) => e.preventDefault()}
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
                <Link
                  to="/books"
                  className="nav-link active"
                  aria-current="page"
                >
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/books/addbook" className="nav-link">
                  Add a book
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Link to={"/books/" + search}>Search</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
