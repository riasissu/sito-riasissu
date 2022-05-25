/*function checkName() {
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

function checkPasswordMatching() {
  var userPassword = document.getElementById("userPassword");
  var userPassword = document.getElementById("userPasswordConfirm");
  var matching = ( document.getElementById("userPassword") == document.getElementById("userPasswordConfirm") );
  document.getElementById("userPasswordNotMatching").style.display = matching
	? "none"
	: "block";
}

const codiceFiscaleRegex= /[A-Z]{6}\d{2}[A-Z]{1}\d{2}[A-Z]{1}\d{3}[A-Z]{1}/;

function checkCodiceFiscale(){
  const userCodiceFiscale = document.getElementById("userCodiceFiscale");
  const valid = userCodiceFiscale.value.match(codiceFiscaleRegex);
  document.getElementById("userCodiceFiscaleError").style.display = valid ? "none" : "block";
}

function checkBirthPlace() {
  const userBirthPlace = document.getElementById("userBirthPlace").value
  document.getElementById("userBirthPlaceError").style.display = userBirthPlace !== "" ? "none" : "block"
}

function checkBirthDate() {
  const userBirthDate = document.getElementById("userBirthDate").value
  document.getElementById("userBirthDateError").style.display = userBirthDate !== "" ? "none" : "block" //TODO implement age checks
}

function checkAddressCity() {
  const userAddressCity = document.getElementById("userAddressCity").value
  document.getElementById("userAddressCityError").style.display = userAddressCity !== "" ? "none" : "block"
}

function checkAddressStreet() {
  const userAddressStreet = document.getElementById("userAddressStreet").value
  document.getElementById("userAddressStreetError").style.display = userAddressStreet !== "" ? "none" : "block"
}

function checkDegreeName() {
  const userDegree = document.getElementById("userDegree").value
  document.getElementById("userDegreeError").style.display = userDegree !== "" ? "none" : "block"
}

const CAPRegex = /[0-9]{5}/
function checkCAP() {
  const userCAP = document.getElementById("userCAP").value
  const valid = userCAP.value.match(CAPRegex)
  document.getElementById("userCAPError").style.display = valid ? "none" : "block"
}

function checkDegreeType() {
  const userDegreeType = document.getElementById("userDegreeType").value
  document.getElementById("userDegreeTypeError").style.display = userDegreeType !== "null" ? "none" : "block"
}


function checkYear() {
  const userYear = document.getElementById("user").value
  document.getElementById("userError").style.display = user !== "" ? "none" : "block"
}


function checkCollegeName() {
  const userCollegeName = document.getElementById("userCollegeName").value //innerHTML
  document.getElementById("userCollegeNameError").style.display = userCollegeName !== "null" ? "none" : "block"
}


function checkUniversity() {
  const userUniversity = document.getElementById("userUniversity").value
  document.getElementById("userUniversityError").style.display = userUniversity !== "" ? "none" : "block"
}

function checkAcademicYear() {
  const academicYear = document.getElementById("academicYear").value
  document.getElementById("academicYearError").style.display = academicYear !== "null" ? "none" : "block"
}
*/