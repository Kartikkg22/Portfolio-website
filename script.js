const roles=["Web Developer","AI/ML Enthusiast","Data Scientist"];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");
function changeText(){
    index = (index+1)%roles.length;
    dynamicText.textContent = roles[index];
}
setInterval(changeText,2000);

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    projectCards.forEach(card => observer.observe(card));
});
