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
    }
}

function clearSession() {
    sessionStorage.clear();
}

var contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', function() {
    var contactResult = document.getElementById('contact-result');
    contactResult.innerHTML = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-success"><strong>Success!</strong> Your comment has been sent.</div><br></div><div class="col-sm-3"></div></div></div>';
}, false);