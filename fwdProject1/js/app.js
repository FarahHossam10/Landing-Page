// building the nav bar list
let sections = Array.from(document.querySelectorAll("section"));//getting sections in an array to easily loop on them
let navList = document.getElementById("navbar__list");
function createListItems(){
    for(sect of sections){
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="#${sect.id}"  data-nav="${sect.id}" class="menu__link">${sect.dataset.nav}</a></li>`;
        navList.appendChild(listItem);
    }
}
createListItems();
// adding active section class to active sections
window.onscroll = function(){
    sections.forEach(function(sect){
        if(sect.getBoundingClientRect().top >= -350 && sect.getBoundingClientRect().top <= 150){
            sect.classList.add("your-active-class");
        }else{
            sect.classList.remove("your-active-class");
        }
    })
}
// to scroll smoothly to sections when clicking on nav bar links
navList.addEventListener("click" , (e)=>{ 
    e.preventDefault(); 
    let current = e.target.dataset.nav;  
    if(current){
        document.getElementById(`${current}`).scrollIntoView({behavior:"smooth"});
    }
})
// to return to top of page upon refreshing 
window.onbeforeunload = function(){
    window.scrollTo(0,0);
}
