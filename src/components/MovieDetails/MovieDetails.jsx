import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import nowShowingFilmsData from "../../data/now showing films.js";
import popularFilmsData from "../../data/popular films.js";

import leftArrowIcon from "../../assets/images/movieDetails-page/arrow-left-icon.svg";
import watchTrallerIcon from "../../assets/images/movieDetails-page/watch-traller-icon.svg";
import starIcon from "../../assets/images/movieDetails-page/star-icon.png";
import clockIcon from "../../assets/images/movieDetails-page/clock-icon.png";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentMovie, setCurrentMovie] = useState("");
  useEffect(() => {
    const films = [...nowShowingFilmsData, ...popularFilmsData];
    for (let i = 0; i < films.length; i++) {
      if (films[i].id == id) setCurrentMovie(films[i]);
    }
  }, []);
  return (
    <>
      <div className="reservePagesContainer">
        <img
          src={leftArrowIcon}
          alt="left arrow icon"
          onClick={() => navigate("/home")}
        />

        <img
          src={currentMovie.image}
          alt={currentMovie.name}
          className="reservePagesImage"
        />
        <div className="movieDetailsPageSec1Container">
          <h2>{currentMovie.name}</h2>
          <h3>{currentMovie.genre}</h3>
        </div>

        <div className="movieDetailsPageSec2Container">
          <button>
            <img src={watchTrallerIcon} alt="watch traller icon" />
            traller
          </button>

          <div className="starRateCont">
            <img src={starIcon} alt="star icon" />
            <div>
              <h4>Rating</h4>
              <h3>{currentMovie.rate}</h3>
            </div>
          </div>

          <div className="starRateCont">
            <img
              src={clockIcon}
              alt="clock icon"
              style={{ width: "25px", height: "25px", marginRight: "10px" }}
            />
            <div>
              <h4>Duration</h4>
              <h3>{currentMovie.time}</h3>
            </div>
          </div>
        </div>

        <div className="detailsMovieDescriptionContainer">
          <p>
            {currentMovie.description}
          </p>
        </div>

        <div className="mainButtonContainer">
            <button className="mainButton">
                Reserve a seat
            </button>
        </div>
      </div>
    </>
  );
}
