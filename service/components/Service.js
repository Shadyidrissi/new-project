import React from "react";
import "./style.css";
import icons from "../src/app/data/iconsData";
import Link from "next/link";
import crads from "../src/app/data/cardsData";

function Service() {
  return (
    <section className="div-service">
      <h1>My Gallery</h1>
      <p>
        Shady has extensive experience in building a wide range of websites,
        showcasing his proficiency in web development. His projects demonstrate
        a deep understanding of both front-end and back-end technologies,
        resulting in user-friendly and highly functional websites that meet
        diverse client needs.
      </p>
      <div className="iteams-service">
        {crads.map((card) => {
          return (
            <div id="card">
              <img src={card.image} alt="" />
              <h4>{card.title}</h4>
              <Link href={`${card.url}`}>
                <span>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-full w-full"
                  >
                    <rect
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      rx="30"
                      fill="transparent"
                      stroke="transparent"
                      stroke-width="0"
                      stroke-opacity="100%"
                      paint-order="stroke"
                    ></rect>
                    <svg
                      width="256px"
                      height="256px"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      x="128"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path
                          fill="currentColor"
                          d="M18 5v2h5.563L11.28 19.281l1.438 1.438L25 8.437V14h2V5zM5 9v18h18V14l-2 2v9H7V11h9l2-2z"
                        />
                      </g>
                    </svg>
                  </svg>
                </span>
                <span className="md:underline ">Let's see it</span>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="skills-service">
        {icons.map((icon) => {
          return <span>{icon.icon}</span>;
        })}
      </div>
    </section>
  );
}

export default Service;
