import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div class="section-center featured-center">
        {tours.map((tour) => {
          const { image, date, title, text, location, day, cost } = tour;
          return (
            <article class="tour-card">
              <div class="tour-img-container">
                <img src={image} class="tour-img" alt="" />
                <p class="tour-date">{date}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{day}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
