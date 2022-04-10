
const mobLifebar = document.createElement('div');
mobLifebar.setAttribute('id', 'mobLifebar');
mobLifebar.classList.add('mobLifebar');

const mobLife = document.createElement('div');
mobLife.setAttribute('id', 'mobLife');
mobLife.classList.add('mobLife');

mobLifebar.life = 100;
mobLifebar.hit = () => {
  console.log('-5 HP');
  mobLifebar.life = mobLifebar.life - 5;
  mobLife.style = 'width: ' + mobLifebar.life + '%;';
  if (mobLifebar.life > 41 && mobLifebar.life < 80)
    mobLife.classList.add('cautionLife')
  if (mobLifebar.life > 0 && mobLifebar.life < 40)
    mobLife.classList.add('dangerousLife')
  if (mobLifebar.life <= 0)
    document.location.reload(true);
}

mobLifebar.appendChild(mobLife);
gameBox.appendChild(mobLifebar);