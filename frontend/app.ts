let message: string = 'Hello, World!';

let projectUrl = 'http://127.0.0.1:8000/api/projects/';

let getProjects = () => {
   fetch(projectUrl)
      .then(response => response.json())
      .then(data => {
         console.log(data)
         buildProjects(data);
      })
}

let buildProjects = (projects) => {
   let projectsWrapper = document.getElementById("projects-wrapper") as HTMLBodyElement;
   projectsWrapper.innerHTML = ''
   for (let i = 0; projects.length > i; i++) {
      let project = projects[i]

      let projectCard = `
         <div class="project--card">
            <img src="http://127.0.0.1:8000/${project.featured_image}" />
            <div>
               <div class="card--header">
                  <h3>${project.title}</h3>
                  <strong class="vote--option" data-vote="up" data-project="${project.id}">&#43;</strong>
                  <strong class="vote--option" data-vote="down" data-project="${project.id}">&#8722;</strong>
               </div>
               <i>${project.vote_ratio}% Positive feedback</i>
               <p>${project.description.substring(0, 150)}</p>
            </div>
         </div>
      `
      projectsWrapper.innerHTML += projectCard;
   }
   addVoteEvents()
   //Add an Listener
}

let addVoteEvents = () => {
   let voteBtns = document.getElementsByClassName('vote--option')

   for (let i = 0; voteBtns.length > i; i++) {
      voteBtns[i].addEventListener('click', (e) => {
         let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MzcyNzAzLCJpYXQiOjE2NzcyODYzMDMsImp0aSI6ImYwZDJiYzc3OWMwYTQ4NjZhOGQ0ZTI1Yjc4N2NlMjdlIiwidXNlcl9pZCI6MX0.dfFIn0xVr78n050U3_NvuTdh_idR08VNTlfNm3jkYbc";
         const target = e.target as HTMLElement;
         let vote = target.dataset.vote
         let project = target.dataset.project

         fetch(`http://127.0.0.1:8000/api/project/${project}/vote/`, {
            method: 'POST', 
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({'value': vote})
         })
         .then(response => response.json())
         .then(data => {
            console.log('Success:', data)
            getProjects();
         })
   })
}
}

getProjects();