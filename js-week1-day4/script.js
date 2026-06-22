// ── ELEMENTS ──────────────────────────────
const input = document.querySelector("#skill-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#skill-list");
const counter = document.querySelector("#counter");

// ── FUNCTIONS ─────────────────────────────
function updateCounter() {
  const items = document.querySelectorAll("#skill-list li");
  counter.textContent = items.length + " skills";
}

function addSkill() {
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a skill");
    return;
  }

  const li = document.createElement("li");
  li.textContent = value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounter();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";
  updateCounter();
}

// ── EVENT LISTENERS ───────────────────────
addBtn.addEventListener("click", addSkill);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addSkill();
  }
});
