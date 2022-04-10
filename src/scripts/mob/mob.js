const mob = document.createElement('div');
mob.setAttribute('id', 'mob');
mob.classList.add('mob');
mob.flutuate = () => {
  setInterval(() => {
    mob.style = 'bottom: 30%;';
    setTimeout(() => {
      mob.style = 'bottom: 20%;';
    }, 500);
  }, 1000);
}
mob.position = () => {
  var topPos = mob.getBoundingClientRect().top + window.scrollY;
  var leftPos = mob.getBoundingClientRect().left + window.scrollX;
  return {
    'topPos': topPos,
    'leftPos': leftPos
  };
}
gameBox.appendChild(mob);
mob.flutuate();