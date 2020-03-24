document.querySelector('td').onclick = () => {
  console.log('action #1');
}

document.querySelector('td').addEventListener('click', () => {
  console.log('action #2');
});



let step = 0;

const infoLogger = () => {
  step++;
  console.log('step - ' + step);
}

document.querySelector('td').addEventListener('click', infoLogger);
document.querySelector('td').addEventListener('copy',() => {
  alert('Haaa, you have been catched')
  document.querySelector('td').removeEventListener('click', infoLogger);
});
