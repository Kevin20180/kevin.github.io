/*
// Armazene uma referência ao <h1> em uma variável
const myHeading = document.querySelector("h1");
// Atualizar o conteúdo do texto do <h1>
myHeading.textContent = "Olá mundo!";
*/
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/chrome-icon.jpeg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, insira seu nome.");
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});
