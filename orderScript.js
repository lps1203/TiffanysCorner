function checkLoggedIn() {
    var userEl = document.getElementById('loggedInUsername');
    var loggedIn = sessionStorage.getItem('loggedIn');
    if(loggedIn) {
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
    } else {
        var notEl = document.getElementById('notLoggedIn');
        var warning = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Stop!</strong> You are not logged in. Please log in or sign up to place an order with us.</div><br></div><div class="col-sm-3"></div></div></div>';
        notEl.innerHTML = warning;
    }
}

function clearSession() {
    sessionStorage.clear();
}

var contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', function() {
    var contactResult = document.getElementById('contact-result');
    contactResult.innerHTML = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-success"><strong>Thank you!</strong> Your order has been sent to us. Our confirmation email will provide detailed information about payment and shipping. Please be advised that you do not accept international orders. </div><br></div><div class="col-sm-3"></div></div></div>';
}, false);




