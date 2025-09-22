// JavaScript source code


console.log("JS failas veikia!");

const mygtukas = document.getElementById("mygtukas");
const rezultatas = document.getElementById("rezultatas");

mygtukas.addEventListener("click", () => {
    rezultatas.innerText = "Mygtukas paspaustas!";
});
