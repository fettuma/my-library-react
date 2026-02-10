import { Link } from "react-router-dom";
import "./PaymentPages.css";

const Cancel = () => {
  return (
    <div className="payment-page">
      <h1 className="payment-title">Payment Cancelled ❌</h1>
      <p className="payment-text">You didn’t complete the payment. Try again if you want the book.</p>
      <Link to="/" className="payment-btn">Back to Library</Link>
    </div>
  );
};

export default Cancel;
