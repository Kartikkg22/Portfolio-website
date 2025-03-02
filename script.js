const roles=["Web Developer","AI/ML Enthusiast","Data Scientist"];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");
function changeText(){
    index = (index+1)%roles.length;
    dynamicText.textContent = roles[index];
}
setInterval(changeText,2000);