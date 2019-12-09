//hamburger

let getHamburger = document.querySelector(".toggle-menu");
let getMenu = document.querySelector(".page-navigation__items");

getHamburger.addEventListener("click", function () {
    getMenu.classList.toggle("hamburger");
});

//buyticket
document.querySelectorAll('.button').forEach(b => {
    b.addEventListener('click', function () {
        b.classList.add("ticket");
        b.innerHTML = "Have fun!";
    })
});

//submit button

document.querySelector(".buttoncontact").addEventListener("click", function (event) {
    event.preventDefault();
    const topic = document.getElementById("topic");
    const email = document.getElementById("email");
    console.log("topic:" + topic.value, "email:" + email.value);
})