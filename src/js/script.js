const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pass');
const button = document.getElementById('button');
button.addEventListener('click', (event) => {
    event.preventDefault();

    const login = emailInput.value;
    const password = passwordInput.value;

    validateLogin(login);
});

function validateLogin(login) {
    if (login == "") {
        alert("Login must be filled out");
        return false;
    } else if (login.length < 6) {
        alert("Login must 6 or more");
        return false;
    } else if (login.length > 20) {
        alert("Login must 20 or less");
        return false;
    }
    return true;
}

// create some validations:
// - field should not be empty ✅ 
// - min length = 6
// - max length = 20