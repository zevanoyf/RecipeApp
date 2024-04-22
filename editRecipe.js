const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/WAf4MgxGzWgp/${id}`;

const nameInput = document.getElementById("name");
const ingredientsInput = document.getElementById("ingredients");
const stepsInput = document.getElementById("steps");
const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch("https://v1.appbackend.io/v1/rows/WAf4MgxGzWgp", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      name: nameInput.value,
      ingredients: ingredientsInput.value,
    }),
  });

  location.replace(`/recipe.html?id=${id}`);
});

async function getRecipe() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const recipe = await getRecipe();

  nameInput.value = recipe.name;
  ingredientsInput.value = recipe.ingredients;
  stepsInput.value = recipe.steps;
}

buildApp();
