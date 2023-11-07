import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
const Authentication = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <>
      {toggleForm ? (
        <Login toggleSignUp={handleToggle} />
      ) : (
        <Signup toggleLogin={handleToggle} />
      )}
    </>
  );
};

export default Authentication;