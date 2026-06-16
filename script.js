// Store your info
const name = "Troy Jian";
const role = "Web Developer";
const city = "Parañaque City";

// Print to Console
console.log(name);
console.log(role);
console.log(city);

// Find the h1 and change its text
const heading = document.querySelector("h1");
heading.textContent = "Hi, I'm Troy — Web Developer";

// Find the back-to-top button and make it work
const backBtn = document.querySelector(".back-to-top");

backBtn.addEventListener("click", function () {
  console.log("Back to top clicked");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
