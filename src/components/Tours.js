import React from "react";
import Title from "./Title";
import { tours } from "../Data";
const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div class="section-center featured-center">
        {tours.map((tour) => {
          const { id, title, date, img, text, country, days, price } = tour;
          return (
            <article class="tour-card" key={id}>
              <div class="tour-img-container">
                <img src={img} class="tour-img" alt="" />
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
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
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
