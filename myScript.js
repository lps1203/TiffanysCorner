var show = document.getElementById('show');
localStorage.setItem('age', '125');
localStorage.setItem('color', 'black');
var age = localStorage.getItem('age');
var color = localStorage.getItem('color');

show.innerHTML = age + " ***" + color;