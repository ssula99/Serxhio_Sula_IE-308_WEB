const skyform = document.getElementById("skyform");
const username = document.getElementById("username");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phonenumber");
const city = document.getElementById("city");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearFieldsBtn");

submitBtn.addEventListener("click", function (event) {
  checkInputs();
});

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  skyform.reset();
});

skyform.addEventListener("submit", function (event) {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const cityValue = city.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username nuk mund të jetë bosh");
  } else {
    setSuccessFor(username);
  }

  if (firstnameValue === "") {
    setErrorFor(firstname, "Emri nuk mund të jetë bosh");
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === "") {
    setErrorFor(lastname, "Mbiemri nuk mund të jetë bosh");
  } else {
    setSuccessFor(lastname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email nuk mund të jetë bosh");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Foormati i emailit nuk është i saktë");
  } else {
    setSuccessFor(email);
  }

  if (phoneNumberValue === "") {
	setErrorFor(phoneNumber, "Nr. telefonit nuk mund të jetë bosh");
  } else if (!isValidPhoneNumber(phoneNumberValue)) {
    setErrorFor(phoneNumber, "Formati i numrit të telefonit nuk është i saktë");
  } else {
    setSuccessFor(phoneNumber);
  }

  if (cityValue === "0") {
	setErrorFor(city, "Ju lutem zgjidhni një qytet");
  } else {
    setSuccessFor(city);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Fjalëkalimi nuk mund të jetë bosh!");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Konfirmimi i fjalëkalimit nuk mund të jetë bosh");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Fjalëkalimet nuk janë njësoj");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("form-control", "error");
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("form-control", "error");
//   small.innerText = '';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isValidPhoneNumber(phoneNum) {
  return /^(((067|068|069)\d{7})){1}$/.test(phoneNum);
}
