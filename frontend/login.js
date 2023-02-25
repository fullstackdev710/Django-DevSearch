var loginForm = document.forms["loginForm"];
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = {
        username: loginForm.username.value,
        password: loginForm.password.value
    };
    fetch("http://127.0.0.1:8000/api/users/token/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log("Data: ", data.access);
        if (data.access) {
            localStorage.setItem("token", data.access);
            window.location.href = "http://localhost/typescript/";
        }
        else {
            alert("Username or Password did not work");
        }
    });
});
