import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}
export default App;
