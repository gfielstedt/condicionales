//elementos del DOM
const inputUno = document.querySelector("#input-1");
const inputDos = document.querySelector("#input-2");
const inputTres = document.querySelector("#input-3");
const resultado = document.querySelector("#resultado");

//variables

//funciones

//eventos

btn.addEventListener("click", () => {
  const valueUno = inputUno.value;
  const valueDos = inputDos.value;
  const valueTres = inputTres.value;

  const total = Number(valueUno) + Number(valueDos) + Number(valueTres);

  if (total <= 10) {
    resultado.innerHTML =
      "¡¡¡Felicitaciones, adoptaste " + total + " perritos ❤️!!!";
  } else {
    resultado.innerHTML = " Lo siento 🥲, no puedes adoptar tantos perritos";
  }

  //console.log(total);
});
3;
