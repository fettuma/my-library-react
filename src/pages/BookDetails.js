import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { updateBookStatus } from "../features/books/booksSlice";
import { addReadBook } from "../features/stats/statsSlice";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const dispatch = useDispatch();

 
  const { user } = useSelector(state => state);

  const { books, loading } = useSelector(state => state.books);

  // 🔹 description state
  const [description, setDescription] = useState("");
  const [loadingDesc, setLoadingDesc] = useState(false);

  const book = books.find(b => b.id === decodedId);

  // ✅ Hooks must be called BEFORE returns
  useEffect(() => {
    if (!book) return;

    const fetchDescription = async () => {
      setLoadingDesc(true);
      try {
        const workId = book.id.replace("/works/", "");
        const res = await axios.get(
          `https://openlibrary.org/works/${workId}.json`
        );

        const desc = res.data.description;

        if (typeof desc === "string") {
          setDescription(desc);
        } else if (desc?.value) {
          setDescription(desc.value);
        } else {
          setDescription("No description available.");
        }
      } catch {
        setDescription("No description available.");
      } finally {
        setLoadingDesc(false);
      }
    };

    fetchDescription();
  }, [book]);

  const handleMarkAsRead = () => {
    if (book.status === "read") return;

    dispatch(updateBookStatus({ id: book.id, status: "read" }));
    dispatch(addReadBook(book.pages || 0));
  };

  // 🔽 RETURNS AFTER HOOKS
  if (loading) {
    return <p className="status"> Loading book details...</p>;
  }

  if (!book) {
    return <p className="status error"> Book not found</p>;
  }


  const BOOK_PRICE = 5;

  const handleBuy = async () => {
    if (!user?.token) {
      alert("Please login to buy this book");
      return;
    }
  const response = await axios.post(
    "https://my-library-backend-wu24.onrender.com/create-checkout-session",
    {
      title: book.titre,
      price: BOOK_PRICE,
    }
  );

  window.location.href = response.data.url;
};


return (
  <div className="book-details">
    <div className="details-layout">

      {/* LEFT — COVER */}
      <div className="details-left">
        <img
          src={
            book.coverUrl
              ? book.coverUrl
              : book.coverId
              ? `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`
              : "https://via.placeholder.com/300x450?text=No+Cover"
          }
          alt={book.titre}
          className="details-cover"
        />
      </div>

      {/* RIGHT — CONTENT */}
      <div className="details-right">
        <h2 className="details-title">{book.titre}</h2>

        <p className="details-author">
          <strong>Author:</strong> {book.auteur}
        </p>

        <p className="details-pages">
          <strong>Pages:</strong> {book.pages || "—"}
        </p>

        <p className={`book-status ${book.status}`}>
          <strong>Status:</strong>{" "}
          {book.status === "read" ? "Read" : "Not read yet..."}
        </p>

        {/* DESCRIPTION */}
        <div className="book-description">
          <h3>Description</h3>
          {loadingDesc ? (
            <p>⏳ Loading description...</p>
          ) : (
            <p>{description}</p>
          )}
        </div>

        {/* BUTTON */}
        {book.status !== "read" && (
          <button className="mark-btn" onClick={handleMarkAsRead}>
            Mark as read
          </button>
          
        )}
        <div className="book-payment">
          <p className="book-price">Price: $5</p>

          <button className="book-buy-btn" onClick={handleBuy}>
            Buy Book
          </button>
        </div>


      </div>

    </div>
  </div>
);

};

export default BookDetails;
