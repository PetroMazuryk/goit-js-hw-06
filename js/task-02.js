const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  ingredientsList: document.querySelector("#ingredients"),
};

const itemsOfIngredients = ingredients.map((option) => {
  const ingredientsItemEL = document.createElement("li");
  ingredientsItemEL.textContent = option;
  ingredientsItemEL.classList.add("item");

  return ingredientsItemEL;
});

refs.ingredientsList.append(...itemsOfIngredients);
