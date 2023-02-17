// console.log('this is the main contant of this website for personal portfolio');
let burger = document.querySelector(".burger");
let burger2 = document.querySelector(".burger2");
let Navbar = document.querySelector(".navbar");




burger.addEventListener("click", () => {
    // Navbar.classList.toggle("show-manue");
    Navbar.style.display = 'block'


    burger2.addEventListener("click", () => {
        // Navbar.classList.toggle("show-manue");
        Navbar.style.display='none'
    });
});