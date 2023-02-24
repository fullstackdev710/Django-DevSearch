var message = 'Hello, World!';
var projectUrl = 'http://127.0.0.1:8000/api/projects/';
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
    for (var i = 0; projects.length > i; i++) {
        var project = projects[i];
        var projectCard = "\n         <div class=\"project--card\">\n            <img src=\"http://127.0.0.1:8000/".concat(project.featured_image, "\" />\n            <div>\n               <div class=\"card--header\">\n                  <h3>").concat(project.title, "</h3>\n                  <strong class=\"vote--option\">&#43;</strong>\n                  <strong class=\"vote--option\">&#8722;</strong>\n               </div>\n               <i>").concat(project.vote_ratio, "% Positive feedback</i>\n               <p>").concat(project.description.substring(0, 150), "</p>\n            </div>\n         </div>\n      ");
        projectsWrapper.innerHTML += projectCard;
    }
};
getProjects();
