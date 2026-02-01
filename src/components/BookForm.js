import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import "./BookForm.css";

const BookForm = () => {
  const dispatch = useDispatch();
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [pages, setPages] = useState("");
  const [error, setError] = useState("");
  const [coverFile, setCoverFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titre || !auteur || !pages) {
      setError("Tous les champs sont obligatoires");
      return;
    }

    if (pages <= 0) {
      setError("Le nombre de pages doit être supérieur à 0");
      return;
    }

    let coverUrl = null;
    if (coverFile) coverUrl = URL.createObjectURL(coverFile);

    const newBook = {
      id: Date.now().toString(),
      titre,
      auteur,
      pages: parseInt(pages),
      status: "unread",
      coverUrl,
      isManual: true,
    };

    dispatch(addBook(newBook));

    setTitre("");
    setAuteur("");
    setPages("");
    setError("");
    setCoverFile(null);
  };

  return (
    <div className="book-form-container">
      <h2>Add a book</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title :</label>
          <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
        </div>

        <div>
          <label>Author :</label>
          <input type="text" value={auteur} onChange={(e) => setAuteur(e.target.value)} />
        </div>

        <div>
          <label>Pages :</label>
          <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} />
        </div>

        <div>
          <label>Cover :</label>
          <input type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files[0])} />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BookForm;