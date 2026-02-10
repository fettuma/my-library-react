import { Link } from "react-router-dom";
import "./PaymentPages.css";

const Success = () => {
  return (
    <div className="payment-page">
      <h1 className="payment-title">Payment Successful ✅</h1>
      <p className="payment-text">Thank you for purchasing the book!</p>
      <Link to="/" className="payment-btn">Back to Library</Link>
    </div>
  );
};

export default Success;
