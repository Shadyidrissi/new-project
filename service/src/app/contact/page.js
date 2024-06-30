"use client"; // Add this line at the top

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { InfoContact } from '../function/function';

function Page() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    form.current.reset();
    
    const validationError = InfoContact(name, email, message);
    
    if (validationError) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: validationError,
      });
      return;
    }

    emailjs
      .sendForm('service_325gotd', 'template_xt4rv7u', form.current, 'OUFjExamyWKiw3ZGc')
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
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="bg-white " id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-900 dark:text-black">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-black text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              In hac habitasse platea dictumst
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="mb-6 md:mb-0 space-y-4">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-black">Our Address</h3>
                    <p className="text-gray-600 dark:text-slate-400">mhamid 7</p>
                    <p className="text-gray-600 dark:text-slate-400">Marrakech, MORO</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-black">Contact</h3>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +2126 43082137</p>
                    <p className="text-gray-600 dark:text-slate-400">Mail: chadiidac@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-black">Working hours</h3>
                    <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card">
              <form ref={form} onSubmit={sendEmail} className="p-8 rounded-lg shadow-lg sm:p-12">
                <div className="mb-6 w-full">
                  <h2 className="font-heading mb-1 font-bold tracking-tight text-gray-900 dark:text-black text-2xl sm:text-3xl">
                    Get a free quote
                  </h2>
                  <p className="text-gray-600 dark:text-slate-400">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Name</label>
                    <input name="user_name" type="text" id="name" autoComplete="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Email</label>
                    <input name="user_email" type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0" />
                  </div>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider">Message</label>
                  <textarea id="textarea" name="message" cols={30} rows={5} placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-black text-white px-6 py-3 font-xl hover:bg-white hover:text-black sm:mb-0" style={{ border: '1px solid black' }}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
