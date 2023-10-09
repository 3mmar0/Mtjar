import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";

const router =createBrowserRouter([
  {
    path:"/",
    Element: <></>,
    children:[
      {
      path:"/login",
      element:<Login/>
      },
      {
      path:"/signup",
      element:<Login/>
      },
    ]
  }
])

// const App = () => {
//   return (
//     <>
//       <Login />
    
//     </>
//   );
// };

export default router;
