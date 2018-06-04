
/* этот код помечает картинки, для удобства разработки */
var carusel_two = document.getElementById('carusel_two');
var lis_two = carusel_two.getElementsByTagName('li');
for (var i = 0; i < lis_two.length; i++) {
  lis_two[i].style.position = 'relative';
  var span = document.createElement('span');
  // обычно лучше использовать CSS-классы,
  // но этот код - для удобства разработки, так что не будем трогать стили
  span.style.cssText = 'position:absolute;left:0;top:0;color:';
  span.innerHTML = i + 1;
  lis_two[i].appendChild(span);
}

/* конфигурация */
var width_two = 315; // ширина изображения
var count_two = 3; // количество изображений


var list_two = carusel_two.querySelector('ul');
var listElems_two = carusel_two.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carusel_two.querySelector('.prev_btn').onclick = function() {
  // сдвиг влево
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position + width_two * count_two, 0)
  list_two.style.marginLeft = position + 'px';
};

carusel_two.querySelector('.next_btn').onclick = function() {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position - width_two * count_two, -width_two * (listElems_two.length - count_two));
  list_two.style.marginLeft = position + 'px';
};