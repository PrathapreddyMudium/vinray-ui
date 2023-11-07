import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userLogin from "../auth/userLogin";

const LoginFormComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { error, login } = userLogin();

  const navigate = useNavigate();
  const location = useLocation();
  // replace the login route in the stack
  const from = location.state?.from?.pathname || "/dashboard";
  console.log(from);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (!error) {
      navigate(from, { replace: true });
      setEmail("");
      setPassword("");
      console.log("Success");
      return;
    }
    setErrorMessage(error);
  };
  return (
    <div className="auth-container">
      <h3 style={{marginTop:"30px"}}>Login to your account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{errorMessage}</p>}
        <button className="login-btn" type="submit">Login</button>
      </form>
      <p>Have no account yet?</p>
      <button className="signup-btn" onClick={props.toggleSignUp}>Sign up</button>
      
    </div>
  );
};

export default LoginFormComponent;