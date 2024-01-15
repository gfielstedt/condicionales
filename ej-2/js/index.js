//elementos del DOM
const inputUno = document.querySelector("#input-1");
const inputDos = document.querySelector("#input-2");
const inputTres = document.querySelector("#input-3");

//variables

//funciones

//eventos

btn.addEventListener("click", () => {
  const valueUno = inputUno.value;
  const valueDos = inputDos.value;
  const valueTres = inputTres.value;

  const total = Number(valueUno) + Number(valueDos) + Number(valueTres);

  console.log(total);
});
3;
