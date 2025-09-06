import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import nowShowingFilmsData from "../../data/now showing films.js";
import popularFilmsData from "../../data/popular films.js";

import leftArrowIcon from "../../assets/images/movieDetails-page/arrow-left-icon.svg";

export default function BuyTicket() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentMovie, setCurrentMovie] = useState("");
  useEffect(() => {
    const films = [...nowShowingFilmsData, ...popularFilmsData];
    for (let i = 0; i < films.length; i++) {
      if (films[i].id == id) setCurrentMovie(films[i]);
    }
  }, []);

  const [times, setTimes] = useState([
    "13:00",
    "16:00",
    "19:30",
    "21:00",
    "23:00",
  ]);
  let calendarBody = [];
  for(let i = 0; i < 40; i++) calendarBody.push(1)
  return (
    <>
      <div className="reservePagesContainer">
        <img
          src={leftArrowIcon}
          alt="left arrow icon"
          onClick={() => navigate(`/movie/${currentMovie.id}/reservation`)}
        />

        <h2 style={{ textAlign: "center" }}>Choose a seat</h2>

        <div className="buyTicketPageTimesContainer">
          {times.map((item, index) => {
            return <h4 key={index}>{item}</h4>;
          })}
        </div>

        <div className="calendarTopBottomContainer">
          {[1, 2, 3, 4].map((_, index) => {
            return <div key={index} className="calendarTopBottom"></div>;
          })}
        </div>

        <div className="calendarBodyContainer">
          {calendarBody.map((_, index) => {
            return <div key={index} className="calendarBody"></div>;
          })}
        </div>

        <div className="calendarTopBottomContainer">
          {[1, 2, 3, 4,5,6,7,8].map((_, index) => {
            return <div key={index} className="calendarTopBottom"></div>;
          })}
        </div>

        <div className="calendarStatusSignContainer">
            <div>
                <div></div>
                <h4>Avaible</h4>
            </div>
            <div>
                <div></div>
                <h4>Reserved</h4>
            </div>
            <div>
                <div></div>
                <h4>Selected</h4>
            </div>
        </div>

        <div className="mainButtonContainer">
          <button className="mainButton" onClick={() => navigate(`/movie/${currentMovie.id}/pay`)}>Buy Ticket</button>
        </div>
      </div>
    </>
  );
}
