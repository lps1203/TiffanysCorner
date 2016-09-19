
var signupResult = document.getElementById('signup-result');
var signupBtn = document.getElementById('signup-btn');

var signupSuccess = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-success"><strong>Success!</strong> Redirecting to the login page in 5 sec...</div><br></div><div class="col-sm-3"></div></div></div>';
var signupFail = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> Username is already taken. Try again with a different username.</div><br></div><div class="col-sm-3"></div></div></div>';
var signupWarn = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Warning!</strong> Current user needs to log out first. If you proceed to sign up, the current user will be automatically logged out and all session data will be lost.</div><br></div><div class="col-sm-3"></div></div></div>';


function gotoLogin() {
    window.location.href = 'login.html';
}

function gotoIndex() {
    window.location.href = 'index.html';
}

signupBtn.addEventListener('click', function() {
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
    if(localStorage.getItem(user.value)) {
        signupResult.innerHTML = signupFail;
        user.value="";
        pass.value="";
    }
    else {
        signupResult.innerHTML = signupSuccess;
        localStorage.setItem(user.value, pass.value);
        sessionStorage.clear();
        setTimeout(gotoLogin, 5000);
    }
}, false);

function checkLoggedIn() {
    var userEl = document.getElementById('loggedInUsername');
    var loggedIn = sessionStorage.getItem('loggedIn');
    if(loggedIn) {
        signupResult.innerHTML = signupWarn;
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
