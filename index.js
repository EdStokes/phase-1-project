console.log("App is running");

//Selects which page is displayed in the DOM
function showPage(page) {
    document.querySelectorAll("div").forEach(div => {
       div.style.display = 'none'; 
    })
    document.querySelector(`#${page}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            showPage(this.dataset.page);
        }
    })
})

//site info

function siteInfo() {
    console.log("add site info")
}

document.addEventListener('DOMContenLoaded', function(){
    document.querySelector('#siteInfo').onclick = siteInfo;
})