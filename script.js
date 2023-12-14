// ===================For hide and show ====================

const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function openTab(tabname) {
    tabLinks.forEach(tabLink => tabLink.classList.remove("active-link"));
    tabContents.forEach(tabContent => tabContent.classList.remove("tab-active"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("tab-active");
}


// ==============For responsive side menu =================

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0"
}
function closemenu() {
    sidemenu.style.right = "-200px"
}