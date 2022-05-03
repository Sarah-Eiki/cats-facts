//Generate Breeds
document.addEventListener("DOMContentLoaded", () => {
  fetchBreeds();
});

function fetchBreeds() {
  fetch("https://catfact.ninja/breeds")
    .then((response) => response.json())
    .then((json) => catBreeds(json.data));
}

function catBreeds(breeds) {
  let catBreed = document.querySelector(".cat_breed");
  breeds.map((breed) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("border-3");
    div.classList.add("m-3");
    div.setAttribute("id", "actual-fact");
    div.innerHTML = "Breed : " + breed.breed + "<br>";
    div.innerHTML += "Country : " + breed.country + "<br>";
    div.innerHTML += "Origin : " + breed.origin + "<br>";
    div.innerHTML += "Coat : " + breed.coat + "<br>";
    div.innerHTML += "Pattern : " + breed.pattern;
    div.innerHTML +=
      "<button class='result btn btn-secondary m-2'>Click for a fact !</button>";

    catBreed.appendChild(div);
  });
}

// Generate Fact
let generateFact = document.querySelector(".cat-fact");

generateFact.addEventListener("click", () => {
  fetchFact();
});

function fetchFact() {
  fetch("https://catfact.ninja/facts?limit=1")
    .then((response) => response.json())
    .then((json) => catFact(json.data));
}

function catFact(facts) {
  let catFact = document.querySelector(".result");
  facts.map((fact) => {
    const div = document.createElement("div");
    div.classList.add("m-3");
    div.setAttribute("id", "actual-fact");
    div.innerHTML = fact.fact;

    catFact.appendChild(div);
  });
}
