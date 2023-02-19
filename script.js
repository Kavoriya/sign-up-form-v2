let emailErrorMessage = document.querySelector(".error-message-email");
let usernameErrorMessage = document.querySelector(".error-message-username");
let passwordErrorMessageOne = document.querySelector(".error-message-password-1");
let passwordErrorMessageTwo = document.querySelector(".error-message-password-2");

// Validate email

let email = document.querySelector(".email");
email.addEventListener('blur', handleBlurEmail);

function handleBlurEmail() {
  let re = new RegExp(/.+@.+\..+/);
  if (email.value!='' && re.test(email.value)) {
    makeFieldGreen(email);
    makeLabelBlue(email);
    emailErrorMessage.style.visibility = "hidden";
  } else if (email.value == '') {
    makeFieldGrey(email);
    makeLabelWhite(email);
    emailErrorMessage.style.visibility = "hidden";
  } else {
    makeFieldRed(email);
    makeLabelRed(email);
    emailErrorMessage.textContent = "INVALID EMAIL*";
    emailErrorMessage.style.visibility = "visible";
  }
}

// Validate username

let username = document.querySelector(".username");
username.addEventListener('blur', handleBlurUsername);

function handleBlurUsername() {
  let re = new RegExp(/^[a-zA-Z0-9]{3,20}$/);
  if (username.value!='' && (!re.test(username.value))) {
    makeFieldRed(username);
    makeLabelRed(username);
    usernameErrorMessage.textContent = "USERNAME MUST BE 3-20 CHARACTERS LONG*";
    usernameErrorMessage.style.visibility = "visible";
  } else if (username.value == '') {
    makeFieldGrey(username);
    makeLabelWhite(username);
    usernameErrorMessage.style.visibility = "hidden";
  } else {
    makeFieldGreen(username);
    makeLabelBlue(username);
    usernameErrorMessage.style.visibility = "hidden";
  }
}

// Validate passwords

let passwordOne = document.querySelector(".password-1");
let passwordTwo = document.querySelector(".password-2");
passwordOne.addEventListener('blur', handleBlurPasswords);
passwordTwo.addEventListener('blur', handleBlurPasswords);

function handleBlurPasswords() {
  let re = new RegExp(/^[a-zA-Z0-9]{6,30}$/);
  // if (!re.test(passwordOne.value)) {
  //   makeFieldRed(passwordOne);
  //   passwordErrorMessageOne.textContent = "PASSWORD MUST BE 6-30 CHARACTERS LONG*";
  //   passwordErrorMessageOne.style.visibility = "visible";
  //   return;
  // } else {
  //   passwordErrorMessageOne.style.visibility = "hidden";
  // }
  if (passwordOne.value!='' && passwordTwo.value!='' && passwordOne.value!=passwordTwo.value) {
    makeFieldRed(passwordOne);
    makeFieldRed(passwordTwo);
    makeLabelRed(passwordOne);
    makeLabelRed(passwordTwo);
    passwordErrorMessageTwo.textContent = "PASSWORDS MUST MATCH*";
    passwordErrorMessageTwo.style.visibility = "visible";
  } else if (!re.test(passwordOne.value) && passwordOne.value!='' && passwordTwo.value!='') {
    makeFieldRed(passwordOne);
    makeFieldRed(passwordTwo);
    makeLabelRed(passwordOne);
    makeLabelRed(passwordTwo);
    passwordErrorMessageTwo.textContent = "PASSWORD MUST BE 6-30 CHARACTERS LONG*";
    passwordErrorMessageTwo.style.visibility = "visible";
  } else if (passwordOne.value!='' && passwordTwo.value!='' && passwordOne.value==passwordTwo.value) {
    makeFieldGreen(passwordOne);
    makeFieldGreen(passwordTwo);
    makeLabelBlue(passwordOne);
    makeLabelBlue(passwordTwo);
    passwordErrorMessageTwo.style.visibility = "hidden";
  } else if ((passwordOne.value=='' && passwordTwo.value!='') || (passwordOne.value!='' && passwordTwo.value=='')) {
    makeFieldGrey(passwordOne);
    makeFieldGrey(passwordTwo);
    makeLabelWhite(passwordOne);
    makeLabelWhite(passwordTwo);
    passwordErrorMessageTwo.style.visibility = "hidden";
  }
}

// Float labels

const handleFocusFloats = (e) => {
  const target = e.target;
  target.parentNode.classList.add('active');
};

const handleBlurFloats = (e) => {
  const target = e.target;
  if(!target.value) {
    target.parentNode.classList.remove('active');
  }  
};

const floatContainers = document.querySelectorAll('.float-container');
floatContainers.forEach((floatContainer) => {
  bindEventsForFloats(floatContainer);
});

function bindEventsForFloats(element) {
  const floatField = element.querySelector('input');
  floatField.addEventListener('focus', handleFocusFloats);
  floatField.addEventListener('blur', handleBlurFloats);
}

function makeFieldGreen(field) {
  field.parentNode.classList.remove("invalid")
  field.parentNode.classList.add("valid")
}

function makeFieldRed(field) {
  field.parentNode.classList.remove("valid")
  field.parentNode.classList.add("invalid")
}

function makeFieldGrey(field) {
  field.parentNode.classList.remove("invalid")
  field.parentNode.classList.remove("valid")
}

function makeLabelBlue(field) {
  label = field.parentNode.querySelector('label');
  label.classList.remove('invalid');
  label.classList.add('active');
}

function makeLabelRed(field) {
  label = field.parentNode.querySelector('label');
  label.classList.remove('active');
  label.classList.add('invalid');
}

function makeLabelWhite(field) {
  label = field.parentNode.querySelector('label');
  label.classList.remove('active');
  label.classList.remove('invalid');
}