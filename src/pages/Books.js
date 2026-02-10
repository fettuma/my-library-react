import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books/booksSlice";
import { Link } from "react-router-dom";
import "./Books.css";

const Books = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector(state => state.books);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) return <p className="status"> Loading books...</p>;
  if (error) return <p className="status error"> {error}</p>;

  const filteredBooks = books.filter(book =>
    book.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.auteur?.join(" ").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="books-page">
      <h2 className="books-title">Library</h2>

      {/* 🔍 SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="books-grid">
        {filteredBooks.map(book => (
          <div className="book-card" key={book.id}>
            <img
              src={
                book.coverUrl
                  ? book.coverUrl
                  : book.coverId
                  ? `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`
                  : "https://via.placeholder.com/150x220?text=No+Cover"
              }
              alt={book.titre}
            />

            <h4>{book.titre}</h4>
            <p>{book.auteur}</p>

            <Link
              to={`/book/${encodeURIComponent(book.id)}`}
              className="details-link"
            >
              View details
            </Link>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="status">No books found.</p>
      )}
    </div>
  );
};

export default Books;
