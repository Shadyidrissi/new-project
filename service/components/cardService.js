"use client"
import React from "react";
import "./style.css";
import serviceData from '../src/app/data/serviceData'
import Link from "next/link";



function url(title) {
  let result = title.replace(/ /g, "_");
  return result;
}

function Cardservice() {
  return (
    <div className="div-sell">
      <h1>hello world</h1>
      <div className="itams-sell">
        {/* maping */}
        {serviceData.map(async(item)=>{
            const pathUrl =await url(item.title)
            return (
                <div id="card-sell">
                <ul>
                  <li>
                    {item.icon}
                  </li>
                  <li>
                    <button>
                      <Link href={`/iteam/${pathUrl}`}>Apply</Link>
                    </button>
                  </li>
                </ul>
                <h2>{item.title}</h2>
                <p>
                  is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled
                  it to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularise
                </p>
              </div>
            )
        })}
        {/* <div id="card-sell">
          <ul>
            <li>
              <svg
                width="70"
                height="70"
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
                      <path
                        fill="#2F88FF"
                        d="M37 22.0001L34 25.0001L23 14.0001L26 11.0001C27.5 9.50002 33 7.00005 37 11.0001C41 15.0001 38.5 20.5 37 22.0001Z"
                      />
                      <path d="M42 6L37 11" />
                      <path
                        fill="#2F88FF"
                        d="M11 25.9999L14 22.9999L25 33.9999L22 36.9999C20.5 38.5 15 41 11 36.9999C7 32.9999 9.5 27.5 11 25.9999Z"
                      />
                      <path d="M23 32L27 28" />
                      <path d="M6 42L11 37" />
                      <path d="M16 25L20 21" />
                    </g>
                  </g>
                </svg>
              </svg>
            </li>
            <li>
              <button>send</button>
            </li>
          </ul>
          <h2>hello world</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularise
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Cardservice;
