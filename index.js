const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action = "start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

let intervalId = null;

function onStartBtn() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(changeBodyColor, 1000);
  return intervalId;
}
function onStopBtn() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}
function changeBodyColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}
