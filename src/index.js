import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

StarRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  message: PropTypes.array,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="green" maxRating={10} onSetRating={setMovieRating} />
//       <p>Rating is {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={48} color="red" className="test" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
