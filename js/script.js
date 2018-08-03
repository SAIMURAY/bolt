var menu = document.getElementsByClassName('menu')[0];
var contactBtn = document.getElementsByClassName('header__right')[0];

menu.onclick = function(e) {
  console.log(e);
  console.log('test');
  console.log(contactBtn.style.display);

  if (contactBtn.style.display === 'none') {
    contactBtn.style.display = 'block';
  } else {
    contactBtn.style.display = 'none';
  }
}
