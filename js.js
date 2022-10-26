function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length > 15) {
        elMsg.textContent = 'Username must be 15 characters of more';
    } else {
        elMsg.textContent = '';
    }
}
function  checkEmail() {
    var email = document.getElementById('email').value;
    var elMsg = document.getElementById('feedback1');
    var mailformat = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    if (!mailformat.test(email)) {
        elMsg.textContent = 'Email Khong Hop Le';
    } else {
        elMsg.textContent = '';
    }
}



function checkPassword() {
    var el = document.getElementById('feedback2')
    var pass1 = document.querySelector('#password1').value;

    if (pass1.length < 5)
    {
        el.textContent ='Password khong hop le.';
    } else {
        el.textContent = '';
    }

}

function firmpass() {
    var pass1 = document.querySelector('#password1');
    var pass2 = document.querySelector('#password2');
    el = document.getElementById('feedback3');
    if (pass1.value != pass2.value)
    {
        el.textContent = 'Password khong trung khop.';
    } else
        el.textContent = ' '
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur',checkUsername,'false');

var elEmail = document.getElementById('email');
elEmail.addEventListener('blur',checkEmail, 'false');

var elPassword = document.getElementById('password1');
elPassword.addEventListener('blur',checkPassword , 'false');

var elfirmpass = document.getElementById('password2');
elfirmpass.addEventListener('blur',firmpass , 'false');


