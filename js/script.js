var menu = document.getElementsByClassName('menu')[0];
var contactBtn = document.getElementsByClassName('header__right')[0];

if (window.innerWidth <= 766) {
  contactBtn.style.display = 'none'
}

menu.addEventListener('click', function(e) {
  // console.log(e);
  // console.log('test');
  if (contactBtn.style.display === 'none') {
    contactBtn.style.display = 'block';
  } else {
    contactBtn.style.display = 'none';
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth <= 766) {
    contactBtn.style.display = 'none'
  } else {
    contactBtn.style.display = 'block'
  }
}, false);
