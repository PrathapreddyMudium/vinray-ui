import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userSignUp from "../auth/userSignUp";

const SignUpFormComponent = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/Dashboard";

  const { error, signUp } = userSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password, displayName);

    if (!error) {
      navigate(from, { replace: true });
      setEmail("");
      setPassword("");
      setDisplayName("");
      return;
    } else {
      setErrorMessage(error);
    }

    console.log(email, password, displayName);
  };
  return (
    <div className="auth-container">
      <h3 style={{marginTop:"50px"}}>Create account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
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
        <button className="login-btn" type="submit">Sign Up</button>
      </form>
      <p>Already have an account?</p>
      <button className="signup-btn" onClick={props.toggleLogin}>Login</button>
    </div>
  );
};

export default SignUpFormComponent;