"use client";
import React from "react";
import serviceData from "../../data/serviceData";
import "../../style/style.css";
import { title } from "process";
import { useEffect, useState } from "react";

function url(title) {
  let result = title.replace(/_/g, " ");
  return result;
}

function Page({ params }) {
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  const { name } = params;
  const pathUrl = url(name);

  // Find the service with the matching title
  let service = serviceData.find((service) => service.title === pathUrl);

  return (
    <>
      {service ? (
        <div className="apply-div">
          <ul>
            <h1>{service.title}</h1>
            <main>
              <img
                src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
                alt=""
              />
              <p>{service.description}</p>
            </main>
            <ul className="language-using">
              <h2>Language Using</h2>
              <ul id="language" >
              {service.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
                </ul>
            </ul>
            <ul className="what-will-get">
              <h2>What You Will Get</h2>
              <ul>
                <li>kjbv jvnoivoefbvoefiv evnnivneipvnevjrlv woivioevelnvev</li>
                <li>
                  2kjbv jvnoivoefbvoefiv evnnivneipvnevjrlv woivioevelnvev kjbv
                  jvnoivoefbvoefiv{" "}
                </li>
                <li>
                  evnnivneipvnevjrlv woivioevelnvev kjbv jvnoivoefbvoefiv
                  evnnivneipvnevjrlv woivioevelnvev
                </li>
                <li>
                  evnnivneipvnevjrlv woivioevelnvev kjbv jvnoivoefbvoefiv
                  evnnivneipvnevjrlv woivioevelnvev
                </li>
                <li>
                  evnnivneipvnevjrlv woivioevelnvev kjbv jvnoivoefbvoefiv
                  evnnivneipvnevjrlv woivioevelnvev
                </li>
                <li>
                  evnnivneipvnevjrlv woivioevelnvev kjbv jvnoivoefbvoefiv
                  evnnivneipvnevjrlv woivioevelnvev
                </li>
                <li>
                  evnnivneipvnevjrlv woivioevelnvev kjbv jvnoivoefbvoefiv
                  evnnivneipvnevjrlv woivioevelnvev
                </li>
                <li>
                  evnnivneipvnevjrlv woivioevelnvev kjbv jvnoivoefbvoefiv
                  evnnivneipvnevjrlv woivioevelnvev
                </li>
                <li>
                  evnnivneipvnevjrlv woivioevelnvev kjbv jvnoivoefbvoefiv
                  evnnivneipvnevjrlv woivioevelnvev
                </li>
                <li>
                  evnnivneipvnevjrlv woivioevelnvev kjbv jvnoivoefbvoefiv
                  evnnivneipvnevjrlv woivioevelnvev
                </li>
              </ul>
            </ul>
            <div>{service.form}</div>
          </ul>
        </div>
      ) : (
        <p>Service not found</p>
      )}
    </>
  );
}

// export const metadata={
//   title:`xxx`,
//   description:'hello'
// }

export default Page;
