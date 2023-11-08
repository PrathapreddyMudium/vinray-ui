import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./components/Home";
import Error from "./components/authentication/Error";
import Home from "./components/authentication/Home";
import SignIn from "./components/authentication/SignIn";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
//import "./css/style.css";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      {/* private routes */}
      <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      {/*<Route path="/login" element={<ProtectedRoute><Login/></ProtectedRoute>}>
      </Route>*/}
      </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
