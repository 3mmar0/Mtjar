import "./App.css";
import Login from "../components/Auth/Login"; // Capitalized component and correct path
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../components/Auth/Signup";
import log from "../components/Auth/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> Capitalized component */}
        <Routes>
          <Route
            path="../components/Auth/Login.jsx"
            element={<Login />}
          ></Route>
          <Route
            path="../components/Auth/Signup.jsx"
            element={<Signup />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
