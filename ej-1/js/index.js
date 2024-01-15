//elementos del Dom
const img = document.querySelector("img");

//declaración de variables
let estado = false;

//funciones

//eventos
img.addEventListener("click", () => {
  if (estado == false) {
    img.style.border = "2px solid red";
    estado = true;
  } else {
    img.style.border = "none";
    estado = false;
  }
});
