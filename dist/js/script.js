const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pass');
const button = document.getElementById('button');
button.addEventListener('click', (event) => {
    event.preventDefault();

    const login = emailInput.value;
    const password = passwordInput.value;

    validateLogin(login);
});

// function validateLogin(login) {
//     if (login == "") {
//         alert("Login must be filled out");
//         return false;
//     } else if (login.length != 6) {

//     } else if (login.length <= 20) {

//     }
//     return true;

// }

// create some validations:
// - field should not be empty ✅ 
// - min length = 6
// - max length = 20