import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <>
      <Login />
      <BrowserRouter>
      <Link to="./Signup">Sign Up</Link>

          <Route path="./Auth/Signup" element={<Signup />}></Route>
      
      </BrowserRouter>
    </>
  );
}

export default App;
