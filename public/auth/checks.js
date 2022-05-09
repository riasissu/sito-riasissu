function checkName() {
  const userName = document.getElementById("userName").value
  document.getElementById("userSurnameError").style.display = userName !== "" ? "none" : "block"
}
function checkSurname() {
  const userSurname = document.getElementById("userSurname").value
  document.getElementById("userSurnameError").style.display = userSurname !== "" ? "none" : "block"
}
function checkEmail() {
  const userEmail = document.getElementById("userEmail")
  const valid = userEmail.value.match(emailRegex)
  document.getElementById("userEmailError").style.display = valid ? "none" : "block"
}
function checkPassword() {
  const userPassword = document.getElementById("userPassword")
  const valid = userPassword.value.match(passwordRegex)
  document.getElementById("userPasswordError").style.display = valid ? "none" : "block"
}
