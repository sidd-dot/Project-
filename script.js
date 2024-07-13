// Functions for generating random number lowercase uppercase letters , symbols

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// adding a all functions into a object called randomFunc
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// adding a click event listner to generate button
const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () => {
  const length = document.getElementById("Passwordlength").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumber = document.getElementById("numbers").checked;
  const hasSymbol = document.getElementById("symbols").checked;
  const result = document.getElementById("PasswordResult");
  result.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
  // console.log(hasLower, hasUpper, hasNumber, hasSymbol);
});

// function for generating random password
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  // filter out unchecked types
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // console.log(typesArr);

  // creating a loop for calling generator function for each type
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  // slicing password from 0 to length
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// copy to clipboard
let button = document.getElementById("clipboardBtn");
// add click event listner on button
button.addEventListener("click", (e) => {
  e.preventDefault();
  // execute command for copy text by selecting textarea text with id
  document.execCommand(
    "copy",
    false,
    document.getElementById("PasswordResult").select()
  );
});

/* dark mode toggle  */
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
