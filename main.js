const recipesContainer = document.getElementById("recipes");
const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/WAf4MgxGzWgp";

async function getAllRecipes() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const recipes = await getAllRecipes();

  recipes.data.forEach((recipe) => {
    const recipeContainer = document.createElement("div");
    const recipeImage = document.createElement("img");
    const recipeName = document.createElement("h2");
    const recipeDesc = document.createElement("p");
    const recipeBtn = document.createElement("a");

    recipeImage.src = recipe.cover;
    recipeImage.classList.add(
      "object-cover",
      "rounded-lg",
      "w-full",
      "h-[300px]"
    );
    recipeName.textContent = recipe.name;
    recipeName.classList.add("text-xl", "font-bold");
    recipeDesc.textContent = recipe.description;
    recipeBtn.textContent = "Lihat Resep";
    recipeBtn.href = `/recipe.html?id=${recipe._id}`;
    recipeBtn.classList.add("bg-indigo-500", "text-white", "p-2", "rounded-lg");

    recipeContainer.classList.add(
      "bg-slate-100",
      "p-6",
      "rounded-xl",
      "space-y-4"
    );
    recipeContainer.append(recipeImage, recipeName, recipeDesc, recipeBtn);
    recipesContainer.append(recipeContainer);
  });
}

buildApp();
