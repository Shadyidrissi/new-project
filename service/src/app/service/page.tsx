import React from "react";
import "../style/style.css";
import Cardservice from "../../../components/cardService";

function page() {
  return (
    <>
      <div className="loading-service">
        <h1>Our Fautears</h1>
        <p>
          Welcome to BeGo, your one-stop solution for professional and
          innovative design and development services. We specialize in creating
          custom business cards, intuitive UI/UX designs, robust APIs, and
          comprehensive full stack websites. Our team of experts is dedicated to
          delivering high-quality solutions tailored to meet your specific needs
          and drive your business success. Explore our services and discover how
          we can help elevate your brand and enhance your digital presence.
        </p>
        <button className="animate-bounce">
          <svg
            width="60"
            height="60"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
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
              viewBox="0 0 48 48"
              fill="currentColor"
              x="128"
              y="128"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <g
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path d="M36 14L24 26L12 14" />
                  <path d="M12 34H36" />
                </g>
              </g>
            </svg>
          </svg>
        </button>
      </div>
      <Cardservice />
    </>
  );
}

export default page;
