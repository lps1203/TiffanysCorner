

var loginResult = document.getElementById('login-result');
var loginBtn = document.getElementById('login-btn');

var loginSuccess = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-success"><strong>Success!</strong> Redirecting to the Homepage in 3 sec...</div><br></div><div class="col-sm-3"></div></div></div>';
var loginFail = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> Username and/or Password is not correct. Try again.</div><br></div><div class="col-sm-3"></div></div></div>';
var loginWarn = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Warning!</strong> Current user needs to log out first. If you proceed to log in, the current user will be automatically logged out and all session data will be lost.</div><br></div><div class="col-sm-3"></div></div></div>';


function gotoLogin() {
    window.location.href = 'login.html';
}

function gotoIndex() {
    window.location.href = 'index.html';
}


loginBtn.addEventListener('click', function() {
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
    if(localStorage.getItem(user.value) === pass.value) {
        loginResult.innerHTML = loginSuccess;
        sessionStorage.clear();
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', user.value);
        setTimeout(gotoIndex, 3000);
    }
    else {
        loginResult.innerHTML = loginFail;
        user.value = '';
        pass.value = '';
    }
}, false);

function checkLoggedIn() {
    var userEl = document.getElementById('loggedInUsername');
    var loggedIn = sessionStorage.getItem('loggedIn');
    if(loggedIn) {
        loginResult.innerHTML = loginWarn;
        userEl.textContent = sessionStorage.getItem('username');
        // remove login menu
        var logEl = document.getElementById('login');
        var parentLog = logEl.parentNode;
        parentLog.removeChild(logEl);
        // add logout menu
        var newLi = document.createElement('li');
        newLi.id = 'logout';
        var newA = document.createElement('a');
        newA.href = 'logout.html';
        var newSpan = document.createElement('span');
        newSpan.className = 'glyphicon glyphicon-log-out';
        var newText = document.createTextNode('Logout');
        newA.appendChild(newSpan);
        newA.appendChild(newText);
        newLi.appendChild(newA);
        parentLog.appendChild(newLi);
    }
}


