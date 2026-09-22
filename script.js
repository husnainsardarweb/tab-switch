var home = document.querySelector("#home")
var about = document.querySelector("#about")
var contact = document.querySelector("#contact")
var homeContent = document.querySelector("#home-content")
var aboutContent = document.querySelector("#about-content")
var contactContent = document.querySelector("#contact-content")


home.addEventListener("click", function () {
    texthide();
    homeContent.style.display = "block";
    homeContent.style.width = "70%";
})

about.addEventListener("click", function () {
    texthide();
    aboutContent.style.display = "block";
    aboutContent.style.width = "70%";
})

contact.addEventListener("click", function () {
    texthide();
    contactContent.style.display = "block";
    contactContent.style.width = "70%";
})

function texthide() {
    document.querySelectorAll("h3").forEach(function (h3) {
        h3.style.display = "none";
    })
}