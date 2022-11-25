const categoriesEL = document.querySelector("#categories");
const categoriesLength = categoriesEL.children.length;

console.log(`Number of categories: ${categoriesLength}`);

const items = categoriesEL.querySelectorAll(".item");

items.forEach((item) => {
  const itemName = item.querySelector("h2").textContent;
  console.log(`Category: ${itemName}`);

  const numberOfElements = item.querySelector("ul").children.length;
  console.log(`Elements: ${numberOfElements}`);
});
