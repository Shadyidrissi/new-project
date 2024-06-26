import React from "react";
import '../style/style.css'
function AboutUs() {
  return (
    <>
    <div className="divTitle">
      <h1 className="title-about">hello world</h1>
    </div>
      <div className="sm:flex items-center max-w-screen-xl mx-auto">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img
              src="https://img.freepik.com/premium-vector/contact-us-abstract-concept-vector-illustration_107173-28778.jpg"
              alt="About Our Company"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            {/* <span
              className="text-black  border-b-2 border-black uppercase"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              About us
            </span> */}
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-gray-400">Our Company</span>
            </h2>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
      <section className="text-gray-700 body-font">
        <div className="flex justify-center mt-10 text-4xl font-regular  border-black uppercas">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5935/5935741.png"
                    className="w-32 mb-3"
                    alt="Latest Milling Machinery"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Latest Milling Machinery
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://static.thenounproject.com/png/818026-200.png"
                    className="w-32 mb-3"
                    alt="Reasonable Rates"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/782/782899.png"
                    className="w-32 mb-3"
                    alt="Time Efficiency"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Time Efficiency
                </h2>
              </div>
            </div>

            {/* <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img 
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" 
                    className="w-32 mb-3" 
                    alt="Expertise in Industry" 
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
