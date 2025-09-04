import React from "react";
import { useNavigate } from "react-router-dom";
import popularFilms from "../../data/popular films";
import starIcon from "../../assets/images/home-page/star-icon.png";
import watchIcon from "../../assets/images/home-page/watch-icon.png";
import clockIcon from "../../assets/images/home-page/clock-icon.png";


export default function Section2() {
  const navigate = useNavigate()
  return (
    <>
      <section className="homePageSection2Container">
        <h2>Popular</h2>
        <div>
          {popularFilms.map((film, index) => {
            return (
              <div key={index} className="homePageSection2FilmsContainer">
                <div>
                  <img
                    src={film.image}
                    alt={film.name + " image"}
                    className="homePageSection2FilmsImage"
                    onClick={() => navigate(`/movie/${film.id}/details`)}
                  />
                </div>
                <div className="homePageSection2FilmSecondContainer">
                  <h3 className="homePageSection2FilmName">{film.name}</h3>
                  <div className="homePageSection2FilmRateContainer">
                    <img
                      src={starIcon}
                      alt="star icon"
                      className="homePageSection2FilmsStarIcon"
                    />
                    <h4>{film.rate}</h4>
                  </div>
                  <div className="homePageSection2FilmClockContainer">
                    <img src={clockIcon} alt="clock icon" />
                    <h4>{film.time}</h4>
                  </div>
                </div>

                <div className="homePageSection2FilmWatchDiv">
                  <img src={watchIcon} alt="watch icon" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
