const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const bmiEl = document.getElementById("bmi");
const btnEl = document.getElementById("btn");
const wcEl = document.getElementById("weightcondition");

btnEl.addEventListener("click", calculatebmi);
function calculatebmi() {
  const weightvalue = weightEl.value;
  const heightvalue = heightEl.value / 100;
  const bmivalue = weightvalue / (heightvalue * heightvalue);
  bmiEl.value = bmivalue.toFixed(2);

if (bmivalue <= 18.4) {
  wcEl.innerText = "Under Weight";
} else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
  wcEl.innerText = "Normal Weight";
} else if (bmivalue >= 25 && bmivalue <= 39.9) {
  wcEl.innerText = "Over Weight";
} else if (bmivalue >= 40) {
  wcEl.innerText = "Obesity";
}
}
