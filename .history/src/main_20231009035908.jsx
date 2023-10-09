import React from "react";
import ReactDOM from "react-dom/client";
import ".//index.css";
import { RouterProvider } from "react-router-dom";
import router from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </Provider>
  </React.StrictMode>
);
