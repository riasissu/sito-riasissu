function checkName() {
  var userName = document.getElementById("userName").value;
  document.getElementById("userSurnameError").style.display =
    userName !== "" ? "none" : "block";
}
function checkSurname() {
  var userSurname = document.getElementById("userSurname").value;
  document.getElementById("userSurnameError").style.display =
    userSurname !== "" ? "none" : "block";
}
function checkEmail() {
  var userEmail = document.getElementById("userEmail");
  var valid = userEmail.value.match(emailRegex);
  document.getElementById("userEmailError").style.display = valid
    ? "none"
    : "block";
}
function checkPassword() {
  var userPassword = document.getElementById("userPassword");
  var valid = userPassword.value.match(passwordRegex);
  document.getElementById("userPasswordError").style.display = valid
    ? "none"
    : "block";
}
