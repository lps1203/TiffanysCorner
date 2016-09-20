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


var orderBtn1 = document.getElementById('order-btn1');
var orderSum = document.getElementById('order-summary');
var prices = ['      ', '$59.99', '$89.99', '$89.99', '$9.99',
                      '$14.99', '$9.99',  '$9.99',  '$9.99',
                      '$25.99', '$75.99', '$15.99', '$29.99',
                      '$149.99', '$199.99', '$99.99', '$159.99'];
var num = [0,  1,  3,  4,  5,
             6,  8,  9, 10,
            11, 12, 13, 14,
            15, 16];

var tabRows = '<table class="table"><thead><tr><th>Item No.</th><th>Price</th></tr></thead><tbody>';
var totalPrice = 0;

orderBtn1.addEventListener('click', function() {
    for(var i = 1; i <= 14; i++) {
        var j = num[i];
        if(document.getElementById('c' + j).checked) {
            tabRows += '<tr><td>No. ' + j + '</td><td>' + prices[j] + '</td></tr>';
            totalPrice += Math.round(Number(prices[j].replace('$', ''))*100);
        }
    }
    tabRows += '<tr class="info" style="font-weight: bold"><td>Total Price</td><td>$' + totalPrice / 100 + '</td></tr></tbody></table>';
    orderSum.innerHTML = tabRows;


    tabRows = '<table class="table"><thead><tr><th>Item No.</th><th>Price</th></tr></thead><tbody>';
    totalPrice = 0;
 }, false);

    







var contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', function() {
    var contactResult = document.getElementById('contact-result');
    contactResult.innerHTML = '<div class="container"><div class="row"><div class="col-sm-3"></div><div class="col-sm-6"><div class="alert alert-success"><strong>Thank you!</strong> Your order has been sent to us. Our confirmation email will provide detailed information about payment and shipping. Please be advised that we do not accept international orders. </div><br></div><div class="col-sm-3"></div></div></div>';
}, false);




