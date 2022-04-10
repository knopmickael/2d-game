const mobEyes = document.createElement('div');
mobEyes.setAttribute('id', 'mobEyes');
mobEyes.classList.add('mobEyes');

var leftMobEye = document.createElement('div');
leftMobEye.setAttribute('id', 'leftMobEye');
leftMobEye.classList.add('leftMobEye');

var rightMobEye = document.createElement('div');
rightMobEye.setAttribute('id', 'rightMobEye');
rightMobEye.classList.add('rightMobEye');

mobEyes.appendChild(leftMobEye);
mobEyes.appendChild(rightMobEye);
mobBody.appendChild(mobEyes);