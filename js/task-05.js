// const refs = {
//   input: document.querySelector("#name-input"),
//   output: document.querySelector("#name-output"),
// };

// const blankLine = "Anonymous";
// const onInputWrite = (event) => {
//   if (event.currentTarget.value === blankLine) {
//     return (refs.output.textContent = blankLine);
//   }
//   return (refs.output.textContent = event.currentTarget.value);
// };

// refs.input.addEventListener("input", onInputWrite);

// // Варіант 2 Якщо інпут порожній, у спані  відображатися рядок "Anonymous".

const inputEL = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEL.addEventListener("input", (event) => {
  return event.currentTarget.value
    ? (spanEl.textContent = event.currentTarget.value)
    : (spanEl.textContent = "Anonymos");
});
