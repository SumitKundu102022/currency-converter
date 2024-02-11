const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const arrow = document.querySelector(".dropdown i");

window.addEventListener("load", () => {
  updateExchangeRate();
});

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
      // console.log(currCode);
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
      // console.log(currCode);
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

arrow.addEventListener("click", () => {
  viceVersa();
});

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const viceVersa = () => {
//   console.log(fromCurr.value);.......................................................................
//     console.log(toCurr.value);
    const newToVal = fromCurr.value;
    const newFromVal = toCurr.value;
   
    // console.log(newFromVal);
    //  console.log(newToVal);
    for (let select of dropdowns) {
        let newOption = document.createElement("option");
        newOption.innerText = newToVal;
        
        if (select.name === "from" && currCode === "fromCurr.value") {
            newOption.innerText = newToVal;
            console.log(newFromVal);
            
        } else if (select.name === "to" && currCode === "toCurr.value") {
          newOption.innerText = newFromVal;
        }
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  // console.log(rate);
  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
