document.addEventListener('keydown', (event) => {
  var key = event.key;
  switch (key) {
    case 'ArrowLeft':
      hero.walkLeft();
      break;
    case 'ArrowRight':
      hero.walkRight();
    break;
    case 'ArrowUp':
      hero.jump();
      break;
    case 'c':
      hero.castSpell();
    break;
  }
});