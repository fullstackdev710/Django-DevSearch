var loginBtn = document.getElementById("login-btn");
var logoutBtn = document.getElementById("logout-btn");
if (localStorage.getItem("token")) {
    console.log("aaa");
    loginBtn.remove();
}
else {
    console.log("bbb");
    logoutBtn.remove();
}
logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "http://localhost/typescript/login.php";
});
var message = "Hello, World!";
var projectUrl = "http://127.0.0.1:8000/api/projects/";
var getProjects = function () {
    fetch(projectUrl)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        buildProjects(data);
    });
};
var buildProjects = function (projects) {
    var projectsWrapper = document.getElementById("projects-wrapper");
    projectsWrapper.innerHTML = "";
    for (var i = 0; projects.length > i; i++) {
        var project = projects[i];
        var projectCard = "\n         <div class=\"project--card\">\n            <img src=\"http://127.0.0.1:8000/".concat(project.featured_image, "\" />\n            <div>\n               <div class=\"card--header\">\n                  <h3>").concat(project.title, "</h3>\n                  <strong class=\"vote--option\" data-vote=\"up\" data-project=\"").concat(project.id, "\">&#43;</strong>\n                  <strong class=\"vote--option\" data-vote=\"down\" data-project=\"").concat(project.id, "\">&#8722;</strong>\n               </div>\n               <i>").concat(project.vote_ratio, "% Positive feedback</i>\n               <p>").concat(project.description.substring(0, 150), "</p>\n            </div>\n         </div>\n      ");
        projectsWrapper.innerHTML += projectCard;
    }
    addVoteEvents();
    //Add an Listener
};
var addVoteEvents = function () {
    var voteBtns = document.getElementsByClassName("vote--option");
    for (var i = 0; voteBtns.length > i; i++) {
        voteBtns[i].addEventListener("click", function (e) {
            // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MzcyNzAzLCJpYXQiOjE2NzcyODYzMDMsImp0aSI6ImYwZDJiYzc3OWMwYTQ4NjZhOGQ0ZTI1Yjc4N2NlMjdlIiwidXNlcl9pZCI6MX0.dfFIn0xVr78n050U3_NvuTdh_idR08VNTlfNm3jkYbc";
            var token = localStorage.getItem("token");
            var target = e.target;
            var vote = target.dataset.vote;
            var project = target.dataset.project;
            fetch("http://127.0.0.1:8000/api/project/".concat(project, "/vote/"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({ value: vote })
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                console.log("Success:", data);
                getProjects();
            });
        });
    }
};
getProjects();
