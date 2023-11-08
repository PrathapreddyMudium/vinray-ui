import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
//import "./css/style.css";
import PrivateRoutesLayout from "./layouts/PrivateRoutesLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      {/* private routes */}
      <Route element={<PrivateRoutesLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
