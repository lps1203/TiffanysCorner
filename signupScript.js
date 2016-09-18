
var signupResult = document.getElementById('signup-result');
var signupBtn = document.getElementById('signup-btn');

var signupSuccess = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-success"><strong>Success!</strong> Redirecting to the login page in 5 sec...</div><br></div><div class="col-sm-3"></div></div></div>';
var signupFail = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> Username is already taken. Try again with a different username.</div><br></div><div class="col-sm-3"></div></div></div>';


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
        setTimeout(gotoLogin, 5000);
    }
}, false);
