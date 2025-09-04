import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate()
  return (
    <>
      <div className="landingPageContainer">
        <div className="landingPageFooter">
          <h2>Whatch All Movies</h2>
          <p>Log in to the website and book tickets for the movie you want.</p>
          <button className="mainButton" onClick={() => navigate("/home")}>Enter Now</button>
        </div>
      </div>
    </>
  );
}

