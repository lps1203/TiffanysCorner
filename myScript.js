var signupBtn = document.getElementById('signup-btn');
var show = document.getElementById('show');

signupBtn.addEventListener('click', function() {
    show.innerHTML = document.getElementById('user').value + ' ' + document.getElementById('pass').value;
}, false);