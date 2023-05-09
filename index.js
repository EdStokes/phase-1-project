document.addEventListener("DOMContentLoaded", () => {

    navMenu = document.querySelector('.nav1');
    menuButtons = navMenu.querySelectorAll('button')

    function showPage(page) {
        document.querySelectorAll("div").forEach(div => {
            div.style.display = 'none'; 
        })
        document.querySelector(`#${page}`).style.display = 'block';
    }


   menuButtons.forEach(button => {
    button.onclick = function() {
        showPage(this.dataset.page);
    }
   })








})