import React from "react";
import "../style/style.css";
import Cardservice from '../../../components/cardService'

function page() {
  return (
    <>
      <div className="loading-service">
        <h1>hello</h1>
        <p>
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in
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
