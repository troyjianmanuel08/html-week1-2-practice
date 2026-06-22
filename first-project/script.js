// Store your info
const name = "Troy Jian";
const role = "Web Developer";
const city = "Parañaque City";
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");
const introDiv = document.querySelector(".intro");
const allCards = document.querySelectorAll(".card");

// Print to Console
console.log(name);
console.log(role);
console.log(city);
console.log("H1 text", heading.textContent);
console.log("First paragraph", paragraph.textContent);

// Find the h1 and change its text
heading.textContent = "Hi, I'm Troy - Web Developer";

// Find the back-to-top button and make it work
const backBtn = document.querySelector(".back-to-top");

backBtn.addEventListener("click", function () {
  console.log("Back to top clicked");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

introDiv.addEventListener("click", function () {
  introDiv.classList.toggle("highlighted");
  console.log("Highlighted:", introDiv.classList.contains("highlighted"));
});

allCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("highlighted");
  });
});

const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.innerHTML = "<h3>React</h3><p>Building modern UIs</p>";

const cardsContainer = document.querySelector(".cards");
cardsContainer.appendChild(newCard);

const lastCard = document.querySelector(".cards .card:last-child");
lastCard.addEventListener("click", function () {
  lastCard.remove();
});
