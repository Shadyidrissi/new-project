export function url(title) {
  let result = title.replace(/ /g, "_");
  return result;
}

 function checkInput(firstname, lastname, country, email, type) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if ((!firstname || !lastname || !country || !email || !type)) {
    return "Input is empty";
  }
  if (firstname.length  < 3) {
    return "The first name is less than 3";
  }
  if (lastname.length  < 3) {
    return "The last name is less than 3";
  }
  if (!emailPattern.test(email)) {
    return "The email is not valid";
  }
  if (type.length < 10) {
    return "Please provide more details about your function of web";
  }
  return null;
}
export default checkInput;