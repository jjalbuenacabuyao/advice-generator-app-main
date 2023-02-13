const adviceNumber = document.querySelector("[data-adviceNumber]");
const advice = document.querySelector("[data-advice]");
const dice = document.querySelector("[data-dice]");
const url = "https://api.adviceslip.com/advice"

async function getData(){
  const data = await fetch(url).then(res => res.json());
  advice.innerHTML = `"${data.slip.advice}"`;
  adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
}

getData();

dice.addEventListener("click", () => getData());

