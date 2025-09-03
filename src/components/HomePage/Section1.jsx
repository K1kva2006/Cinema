import React from "react";
import nowShowingfilms from "../../data/now showing films.js";
import popularFilms from "../../data/popular films.js"
export default function Section1() {
  return (
    <>
      <section className="homePageSection1Container">
        <h2>Now Showing</h2>
        <div>
          {nowShowingfilms.map((film, index) => {
            return (
              <div key={index} className="homePageSection1ContainerFilm">
                <img src={film.image} alt={film.image + " image"} />
                <h3>{film.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
