import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxStar={5} defaultRating={5} maxRating={5} /> */}
  </React.StrictMode>
);
