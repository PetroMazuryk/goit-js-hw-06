const refs = {
  increaseValueButton: document.querySelector('[data-action="increment"]'),
  decreaseValueButton: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

const counterValue = 0;
refs.value.textContent = counterValue;

const onIncreaseValueButtonClick = () => {
  refs.value.textContent = Number(refs.value.textContent) + 1;
};

const onDecreaseValueButtonClick = () => {
  refs.value.textContent = Number(refs.value.textContent) - 1;
};

refs.increaseValueButton.addEventListener("click", onIncreaseValueButtonClick);
refs.decreaseValueButton.addEventListener("click", onDecreaseValueButtonClick);
