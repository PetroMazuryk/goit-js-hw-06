const inputEl = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  const numberOfCharactersEntered = event.currentTarget.value.split("").length;
  const requiredAmount = Number(inputEl.dataset.length);

  inputEl.classList.add("invalid");

  if (numberOfCharactersEntered === requiredAmount) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);
