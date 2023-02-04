// Float labels

const FloatLabel = (() => {

  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
  };

  const handleBlur = (e) => {
    const target = e.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }  
  };

  const bindEventsForFloats = (element) => {
    const floatField = element.querySelector('input');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);  
  };

  const init = () => {
    const floatContainers = document.querySelectorAll('.float-container');
    
    floatContainers.forEach((element) => {
      bindEventsForFloats(element);
    });
  };

  return {
    init: init
  };
})();
FloatLabel.init();

// Validate email

let email = document.querySelector(".email");
email.addEventListener('blur', handleBlurEmail);

function handleBlurEmail() {
  let re = new RegExp(/.+@.+\..+/);
  if (email.value!='' && re.test(email.value)) {
    makeFieldGreen(email);
  } else if (email.value == '') {
    makeFieldGrey(email);
  } else {
    makeFieldRed(email);
  }
}

// Validate username

let username = document.querySelector(".username");
username.addEventListener('blur', handleBlurUsername);

function handleBlurUsername() {
  if (username.value!='' && (username.value.length < 3 || username.value.length > 30)) {
    makeFieldRed(username);
  } else if (username.value == '') {
    makeFieldGrey(username);
  } else {
    makeFieldGreen(username);
  }
}

// Validate passwords

let passwordOne = document.querySelector(".password-1");
let passwordTwo = document.querySelector(".password-2");
passwordOne.addEventListener('blur', handleBlurPasswords);
passwordTwo.addEventListener('blur', handleBlurPasswords);

function handleBlurPasswords() {
  if (passwordOne.value!='' && passwordTwo.value!='' && passwordOne.value!=passwordTwo.value) {
    makeFieldRed(passwordOne);
    makeFieldRed(passwordTwo);
  } else if (passwordOne.value!='' && passwordTwo.value!='' && passwordOne.value==passwordTwo.value) {
    makeFieldGreen(passwordOne);
    makeFieldGreen(passwordTwo);
  } else if ((passwordOne.value=='' && passwordTwo.value!='') || (passwordOne.value!='' && passwordTwo.value=='')) {
    makeFieldGrey(passwordOne);
    makeFieldGrey(passwordTwo);
  }
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

