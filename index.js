const body = document.querySelector("body");
const boxes = document.querySelectorAll(".box");
const darkModeToggle = document.querySelector(".dark-mode");
const nav = document.querySelector("nav");

let isDarkMode = false; 

darkModeToggle.addEventListener("click", () => {
    if (!isDarkMode) {
        darkModeToggle.src = "images/Dark-mode-icon-white.svg";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        nav.style.backgroundColor = "black";
        nav.style.color = "white";

        boxes.forEach(box => {
            box.style.backgroundColor = "black";
            box.style.color = "white";
            box.style.border = "2px solid #ffffff69"
        });

    } else {
        darkModeToggle.src = "images/Dark-mode-icon.svg";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        nav.style.backgroundColor = "white";
        nav.style.color = "black";

        boxes.forEach(box => {
            box.style.backgroundColor = "white";
            box.style.color = "black";
            box.style.border = "2px solid #0000003b"
        });
    }
    isDarkMode = !isDarkMode;
});
