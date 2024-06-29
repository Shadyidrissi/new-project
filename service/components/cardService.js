"use client";
import React from "react";
import "./style.css";
import serviceData from "../src/app/data/serviceData";
import Link from "next/link";

// Function to replace spaces with underscores in the title
function url(title) {
  return title.replace(/ /g, "_");
}

// Function to truncate text to 150 characters with ellipsis
function truncateText(text, maxLength = 350) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

function Cardservice() {
  return (
    <div className="div-sell">
      <h1>Service</h1>
      <div className="itams-sell">
        {/* Mapping service data */}
        {serviceData.map((item) => {
          const pathUrl = url(item.title);
          return (
            <div id="card-sell" key={item.title}>
              <ul>
                <li>{item.icon}</li>
                <li>
                  <button>
                    <Link href={`/iteam/${pathUrl}`}>Apply</Link>
                  </button>
                </li>
              </ul>
              <h2>{item.title}</h2>
              <p>
                {truncateText(
                  `${item.description}`
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cardservice;
