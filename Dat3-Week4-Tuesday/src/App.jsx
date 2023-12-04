import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/books";
import Book from "./pages/Book";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/books" element={<Books />}>
            <Route path=":id" element={<Book />} />
            <Route path="addbook" element={<AddBook />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
