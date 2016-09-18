var signupResult = document.getElementById('signup-result');
var signupBtn = document.getElementById('signup-btn');

var signupSuccess = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-success"><strong>Success!</strong> Now you can log into my corner.</div><button id="signup-btn" type="button" class="btn btn-success btn-md">Log me in </button><br></div><div class="col-sm-3"></div></div></div>';
var signupFail = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> Username is already taken. Try again with a different username.</div><br></div><div class="col-sm-3"></div></div></div>';


localStorage.setItem('james', 'ahn');

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
    }
}, false);