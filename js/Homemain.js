function addClass(){
    var v = document.getElementById("but");
    v.className += "animated zoomOutUp";
    /*window.open("test.html")*/

}

const burger = document.querySelector(".burger");
const navList =document.querySelector(".navList");
const links = document.querySelectorAll(".navList li");

burger.addEventListener('click', () => {
    navList.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle('fade');
    });
});

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
}