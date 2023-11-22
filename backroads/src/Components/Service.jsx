import React from "react";
import Title from "./Title";
import { services } from "../data";

const Service = () => {
  return (
    <section class="section services" id="services">
      <Title title="our" subtitle="services" />
      <div class="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, content } = service;
          return (
            <article class="service" key={id}>
              <span class="service-icon">
                <i class={icon}></i>
              </span>
              <div class="service-info">
                <h4 class="service-title">{title}</h4>
                <p class="service-text">{content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;