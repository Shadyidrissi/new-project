"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";
import {checkInput} from '../function/function'
import Swal from 'sweetalert2'

function Form(props) {
  const form = useRef();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const getDeploymentOptions = () => {
    const checkboxes = form.current.querySelectorAll('input[name^="comments-"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value).join(', ');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const deploymentOptions = getDeploymentOptions();

    const formData = new FormData(form.current);
    formData.append('option', deploymentOptions);
    const check =checkInput(formData.get("firstName"),formData.get("lastName"),formData.get("country"),formData.get("email"),formData.get("functionType"))
    if (!check== '') {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: `${check}`
      });
      return ;
    }
    emailjs
      .send("service_kl7jslm", "template_3mfyzla", {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        country: formData.get("country"),
        email: formData.get("email"),
        functionType: formData.get("functionType"),
        title:props.title,
        budge: formData.get("budge"),
        option: deploymentOptions,
      }, "OUFjExamyWKiw3ZGc")
      .then(
        () => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Submit is successfully"
          });          
          form.current.reset(); 
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="space-y-6" style={{ width: "70%", margin: "20px 15%" }}>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-medium font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-medium font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-medium font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-medium font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    className="block w-full border-1 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    name="country"
                  >
                    {countries.length > 0 ? (
                      countries.map((country) => (
                        <option value={country.value} key={country.value}>
                          {country.label}
                        </option>
                      ))
                    ) : (
                      <option>Loading ...</option>
                    )}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="function-type"
                  className="block text-medium font-medium leading-6 text-gray-900"
                >
                  Function Type
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="functionType"
                    id="function-type"
                    autoComplete="street-address"
                    className="block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-medium font-semibold leading-7 text-gray-900">
              Project Information
            </h2>
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Deployment
                </legend>
                <div className="mt-6 space-y-6">
                  {props.list.map((e, index) => (
                    <div className="relative flex gap-x-3" key={index}>
                      <div className="flex h-6 items-center">
                        <input
                          id={`comments-${index}`}
                          name={`comments-${index}`}
                          type="checkbox"
                          value={e}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor={`comments-${index}`}
                          className="font-medium text-gray-900"
                        >
                          {e}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-medium font-semibold leading-6 text-gray-900">
                  Budget
                </legend>
                <div className="mt-6 space-y-6">
                  {props.price.map((e, index) => (
                    <div className="flex items-center gap-x-3" key={index}>
                      <input
                        id={`price-${index}`}
                        name="budge"
                        type="radio"
                        value={e}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor={`price-${index}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {e}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            style={{ border: "1px solid black" }}
            className="bg-black px-3 py-2 text-medium font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-200"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
