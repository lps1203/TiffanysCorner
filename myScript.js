var show = document.getElementById('show');
localStorage.setItem('age', '12');
localStorage.setItem('color', 'blue');
var age = localStorage.getItem('age');
var color = localStorage.getItem('color');

show.innerHTML = age + " " + color;