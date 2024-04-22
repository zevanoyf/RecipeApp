const recipeContainer = document.getElementById("recipe");
const editBtn = document.getElementById("editBtn");

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/WAf4MgxGzWgp/${id}`;

editBtn.href = `/editRecipe.html?id=${id}`;

async function getRecipe() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const recipe = await getRecipe();

  const title = document.createElement("h2");
  const ingredientsHeader = document.createElement("h2");
  const ingredients = document.createElement("p");
  const stepsHeader = document.createElement("h2");
  const steps = document.createElement("p");

  title.textContent = recipe.name;
  ingredients.textContent = recipe.ingredients;
  steps.textContent = recipe.steps;
  ingredientsHeader.textContent = "Ingredients";
  stepsHeader.textContent = "How to make it";

  title.classList.add("text-4xl", "font-bold");
  ingredients.classList.add("whitespace-pre-line");
  steps.classList.add("whitespace-pre-line");
  ingredientsHeader.classList.add("text-2xl", "font-bold");
  stepsHeader.classList.add("text-2xl", "font-bold");

  recipeContainer.append(
    title,
    ingredientsHeader,
    ingredients,
    stepsHeader,
    steps
  );
}

buildApp();
