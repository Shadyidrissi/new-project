import React from "react";
import "./style.css";
import icons  from '../src/app/data/iconsData'
import Link from "next/link";
import crads from '../src/app/data/cardsData'

function Service() {
  return (
    <section className="div-service">
      <h1>Hellow world</h1>
      <p>
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting
      </p>
      <div className="iteams-service">
        {crads.map((card)=>{
          return (
            <div id="card">
            <img src={card.image} alt="" />
            <h4>{card.title}</h4>
            <Link href="">
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
          )
        })}
      </div>
      <div className="skills-service">
        {icons.map((icon)=>{
            return( <span>{icon.icon}</span>)
        })}
      </div>
    </section>
  );
}

export default Service;
