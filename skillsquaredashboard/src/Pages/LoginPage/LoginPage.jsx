import "./LoginPage.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAdmin } from "../../services/api";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginAdmin(username, password);

      toast.success("Login Successful!");

      localStorage.setItem("admin", JSON.stringify(response.data));

      navigate("/Dashboard");
    } catch (error) {
      toast.error("Invalid Username or Password");
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="background-overlay"></div>

      <div className="login-wrapper">
        <div className="grid-background">
          <div className="login-card">
            <img src={Logo} alt="SkillSquare Logo" className="logo" />

            <h1><span className="nono">Welcome to</span> SkillSquare</h1>

            <p className="subtitle">
              Assessment & Placement Management System
            </p>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;