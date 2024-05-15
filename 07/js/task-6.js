'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const initialBoxSize = 30;
const boxContainer = document.querySelector('#boxes');
const input = document.querySelector('input');

function createBoxes(number) {
  const boxes = [];
  for (let i = 0; i < number; i += 1) {
    const boxSize = initialBoxSize + i * 10;
    const box = `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
    boxes.push(box);
  }
  return boxes;
}

var createButton = document.querySelector('#controls [data-create]');
var destroyButton = document.querySelector('#controls [data-destroy]');

createButton.addEventListener('click', (evt) => {
  if (!input.value || input.value < 1 || input.value > 100) {
    return;
  }

  const boxes = createBoxes(input.value);
  boxContainer.innerHTML = boxes.join('');
  input.value = '';
});

destroyButton.addEventListener('click', () => {
  boxContainer.innerHTML = '';
});
