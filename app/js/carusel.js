
/* этот код помечает картинки, для удобства разработки */
var carusel = document.getElementById('carusel');
var lis = carusel.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].style.position = 'relative';
  var span = document.createElement('span');
  // обычно лучше использовать CSS-классы,
  // но этот код - для удобства разработки, так что не будем трогать стили
  span.style.cssText = 'position:absolute;left:0;top:0;color:';
  span.innerHTML = i + 1;
  lis[i].appendChild(span);
}

/* конфигурация */
var width = 112; // ширина изображения
var count = 3; // количество изображений


var list = carusel.querySelector('ul');
var listElems = carusel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carusel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position + width * count, 0)
  list.style.marginLeft = position + 'px';
};

carusel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};