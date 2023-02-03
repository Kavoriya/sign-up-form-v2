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

// Validate passwords

let passwordOne = document.querySelector("#pw-1");
let passwordTwo = document.querySelector("#pw-2");

function makePasswordsGreen() {
  passwordOne.parentNode.classList.remove("invalid")
  passwordOne.parentNode.classList.add("valid")
  passwordTwo.parentNode.classList.remove("invalid")
  passwordTwo.parentNode.classList.add("valid")
}

function makePasswordsRed() {
  passwordOne.parentNode.classList.remove("valid")
  passwordOne.parentNode.classList.add("invalid")
  passwordTwo.parentNode.classList.remove("valid")
  passwordTwo.parentNode.classList.add("invalid")
}

function makePasswordsGrey() {
  passwordOne.parentNode.classList.remove("invalid")
  passwordOne.parentNode.classList.remove("valid")
  passwordTwo.parentNode.classList.remove("invalid")
  passwordTwo.parentNode.classList.remove("valid")
}


function handleBlurPasswords() {
  if (passwordOne.value!='' && passwordTwo.value!='' && passwordOne.value!=passwordTwo.value) {
    makePasswordsRed();
  } else if (passwordOne.value!='' && passwordTwo.value!='' && passwordOne.value==passwordTwo.value) {
    makePasswordsGreen();
  } else if (passwordOne.value=='' && passwordTwo.value!='') {
    makePasswordsGrey();
  } else if (passwordOne.value!='' && passwordTwo.value=='') {
    makePasswordsGrey();
  }
};

const bindEventsForPasswords = (element) => {
  element.addEventListener('blur', handleBlurPasswords);
}

bindEventsForPasswords(passwordOne);
bindEventsForPasswords(passwordTwo);


