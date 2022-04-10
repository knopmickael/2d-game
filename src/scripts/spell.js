spellCast = () => {

  let spell = document.createElement('div');
  spell.setAttribute('id', 'spell');
  spell.classList.add('spell');

  let spellBody = document.createElement('div');
  spellBody.setAttribute('id', 'spellBody');
  spellBody.classList.add('spellBody');

  spell.appendChild(spellBody);
  heroArms.appendChild(spell);
  
  setTimeout(() => {
    spellBody.classList.add('spellEnergize');

    setTimeout(() => {
      spell.classList.add('spellCast');
      const target = mob.position();
      var topPos = 0;
      var leftPos = 0;

      setInterval(() => {
        topPos = spell.getBoundingClientRect().top + window.scrollY;
        leftPos = spell.getBoundingClientRect().left + window.scrollX;

        if (target.leftPos < leftPos) {
          heroArms.removeChild(spell);
          let spellExplosion = document.createElement('div');
          spellExplosion.setAttribute('id', 'spellExplosion');
          spellExplosion.classList.add('spellExplosion');
          spellExplosion.style = 'left: 80%; bottom: 20%';
          gameBox.appendChild(spellExplosion);
          mobLifebar.hit();
          setTimeout(() => {
            spellExplosion.classList.add('spellBurn');
            setTimeout(() => {
              spellExplosion.classList.remove('spellBurn');
              setTimeout(() => {
                gameBox.removeChild(spellExplosion);
              }, 250);
            }, 250);
          }, 100);
        }

        topPos = 0;
        leftPos = 0;
      }, 500);
    }, 500);
  }, 500);
}