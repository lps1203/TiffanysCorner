var show = document.getElementById('show');

var age = localStorage.getItem('age');
var color = localStorage.getItem('color');

show.innerHTML = age + " ------------" + color;