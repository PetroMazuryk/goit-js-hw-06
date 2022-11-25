const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const blankLine = "Anonymous";
const onInputWrite = (event) => {
  if (event.currentTarget.value === blankLine) {
    return (refs.output.textContent = blankLine);
  }
  return (refs.output.textContent = event.currentTarget.value);
};

refs.input.addEventListener("input", onInputWrite);
