"use strict";
/* // const anchor = document.querySelector("a")
const anchor = document.querySelector("a")! // => if you certainly know that there is an anchor

// console.log(anchor) => gives error
console.log(anchor.href)
/* if (anchor) {
    console.log(anchor.href)
} */
// const form = document.querySelector("form")!
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toform = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
