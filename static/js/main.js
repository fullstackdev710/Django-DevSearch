
//GEt Search Form and Page Links
let searchForm = document.getElementById('searchForm');
let pageLinks = document.getElementsByClassName('page-link')

//Ensure Search Form Exists
if (searchForm) {
   for (let i = 0; pageLinks.length > i; i++) {
      pageLinks[i].addEventListener('click', function (e) {
         e.preventDefault();

         //Get the Data Attribute
         let page = this.dataset.page

         //Add Hidden Search Input to Form
         searchForm.innerHTML += `<input value=${page} name="page" hidden />`

         //Submit Form
         searchForm.submit()
      })
   }

}