let loginForm: HTMLFormElement = document.forms["loginForm"];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    username: loginForm.username.value,
    password: loginForm.password.value,
  };

  fetch("http://127.0.0.1:8000/api/users/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data: ", data.access);
      if (data.access) {
        localStorage.setItem("token", data.access);
        window.location.href = "http://localhost/typescript/";
      } else {
        alert("Username or Password did not work");
      }
    });
});
