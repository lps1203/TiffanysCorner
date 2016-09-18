

var loginResult = document.getElementById('login-result');
var loginBtn = document.getElementById('login-btn');

var loginSuccess = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-success"><strong>Success!</strong> Redirecting to the Homepage in 3 sec...</div><br></div><div class="col-sm-3"></div></div></div>';
var loginFail = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> Username and/or Password is not correct. Try again.</div><br></div><div class="col-sm-3"></div></div></div>';

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



