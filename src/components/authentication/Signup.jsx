import React, { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const [displayName,setDisplayName] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password,displayName);
      //console.log(res);
      // include the display name in the user profile
      //await res.user.updateProfile({ displayName: displayName });
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log("Error => "+err);
    }
  };

  return (
    <div className="auth-container">
      <div className="p-4 box">
        <h2 className="mb-3">User Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formBasicDisplayname">
            <Form.Control
              type="text"
              placeholder="Display name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <InputGroup className="mb-2" controlId="formBasicPassword">
            <Form.Control
              type={showPassword?"text":"password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            /><Button id="showpassword-btn"onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</Button>
          </InputGroup>

          <button className="login-btn" type="submit">
            Sign Up
          </button>
        </Form>
      </div>
      <p>Already have an account?</p>
      <button className="signup-btn" onClick={props.toggleLogin}>
        Login
      </button>
    </div>
  );
};

export default Signup;
