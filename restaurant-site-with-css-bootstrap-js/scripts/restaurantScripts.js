function validateForm() {
  let firstName = document.forms["formContact"]["firstName"].value,
    lastName = document.forms["formContact"]["lastName"].value,
    email = document.forms["formContact"]["email"].value,
    phoneNum = parseInt(document.forms["formContact"]["phoneNum"].value);

  if (firstName === "") {
    alert("Please fill out the First Name field, it cannot be left empty.");
    return false;
  } else if (lastName === "") {
    alert("Please fill out the Last Name field, it cannot be left empty.");
    return false;
  } else if (email === "") {
    alert("Please fill out the Email field, it cannot be left empty.");
    return false;
  } else if (phoneNum === "" || isNaN(phoneNum)) {
    alert("Please fill out the Phone Number field, it cannot be left empty and only takes in numbers.");
    return false;
  }

  alert(`Thank you ${firstName} ${lastName} for filling out this form we will contact you back shortly by your email ${email} or your phone number at ${phoneNum}.`);

  // return false so form does not submit anything
  return false;
}
