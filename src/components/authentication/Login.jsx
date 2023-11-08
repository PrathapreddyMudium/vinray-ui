import React, { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { GoogleButton } from "react-google-button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="p-4 box">
        <h2 className="mb-3">User Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
          {/*<Form.Label style={{marginBottom:"0px"}}>Email address</Form.Label>*/}
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {/*<Form.Label style={{marginBottom:"0px"}}>Password</Form.Label>*/}
          <InputGroup style={{marginTop:"0px"}} className="mb-2" controlId="formBasicPassword">          
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            <Button
              id="showpassword-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputGroup>

          <button className="login-btn" type="submit">
            Login
          </button>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <p>Have no account yet?</p>
      <button className="signup-btn" onClick={props.toggleSignUp}>
        Sign up
      </button>
    </div>
  );
};

export default Login;
