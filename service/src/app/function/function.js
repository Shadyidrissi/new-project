// src/app/function/function.js

export function url(title) {
  let result = title.replace(/ /g, "_");
  return result;
}

export default function checkInput(firstname, lastname, country, email, type) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if ((!firstname || !lastname || !country || !email || !type)) {
    return " input is empty";
  }
  if (firstname.length  < 3) {
    return "the first name is less the 3";
  }
  if (lastname.length  < 3) {
    return "the last name is less the 3";
  }
  if (!emailPattern.test(email)) {
    return "The email is not valid";
  }
  if (type.length < 10) {
    return "please more explaine about your function of web"
  }
  return null;
}
