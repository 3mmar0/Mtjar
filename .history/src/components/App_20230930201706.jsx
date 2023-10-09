import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <>
      <Login />
      <BrowserRouter>
        <Routes>
          <Route
            path="./Auth/Signup.jsx"
            element={<Signup />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
