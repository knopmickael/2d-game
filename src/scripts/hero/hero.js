const hero = document.createElement('div');
hero.setAttribute('id', 'hero');
hero.classList.add('hero');
gameBox.appendChild(hero);

const minPosX = 5;
const maxPosX = 85;
var positionX = minPosX;
hero.style = 'bottom: 10%; left: ' + positionX + '%';

hero.walkLeft = () => {
  if (positionX > minPosX)
    positionX = positionX - 10;
  hero.style = 'left: ' + positionX + '%;';
}

hero.walkRight = () => {
  if (positionX + 5 < maxPosX)
    positionX = positionX + 10;
  hero.style = 'left: ' + positionX + '%;';
}

hero.jump = () => {
  hero.style = 'transition-duration: .15s; bottom: 25%; left: ' + positionX + '%;';
  setTimeout(() => {
    hero.style = 'transition-duration: .1s; bottom: 10%; left: ' + positionX + '%;';
  }, 150);
}

hero.castSpell = () => spellCast();