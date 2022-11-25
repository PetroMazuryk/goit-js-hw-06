const refs = {
  form: document.querySelector(".login-form"),
  emaile: document.querySelector("input[name=email]"),
  password: document.querySelector("input[name=password]"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("All fields must be filled!");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  refs.form.reset();
}
