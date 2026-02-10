import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import "./AuthPages.css";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // ✅ get user from Redux
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear previous error
    try {
      const res = await fetch("http://localhost:4242/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Login success:", data); // ✅ check backend response
        dispatch(loginUser(data));
      } else {
        setError(data.error);
      }
    } catch (err) {
      console.error("Frontend error:", err);
      setError("Server error");
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        {error && <p className="auth-error">{error}</p>}
        <button type="submit">Login</button>
      </form>

      {/* Show login status */}
      {user.token && <p style={{color: "#f2da7c"}}>Logged in as: {user.email}</p>}
    </div>
  );
};


export default Login;
