
const year = document.getElementById("year");
const topBtn = document.getElementById("topBtn");

year.textContent = new Date().getFullYear();

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
