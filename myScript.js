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
        newLi.id = 'log';
        var newA = document.createElement('a');
        newA.href = 'index.html';
        var newSpan = document.createElement('span');
        newSpan.className = 'glyphicon glyphicon-log-out';
        var newText = document.createTextNode('Logout');
        newA.appendChild(newSpan);
        newA.appendChild(newText);
        newLi.appendChild(newA);
        parentLog.appendChild(newLi);
    }
}



 //<li id="log"><a href="login.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> 
