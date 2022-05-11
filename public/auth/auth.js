function signUp() {
  //   var name = document.getElementById("userName").value
  //   var surname = document.getElementById("userSurname").value
  const user = {
    firstName:		document.getElementById("userName").value,
    secondName:		document.getElementById("userSurname").value,
    password:		document.getElementById("userPassword").value,
    birthPlace:		document.getElementById("userBirthPlace").value,
    birthDate:		document.getElementById("userBirthDate").value,
    CF:				document.getElementById("userCodiceFiscale").value,
    addressCity:	document.getElementById("userAddressCity").value,
    addressStreet:	document.getElementById("userAddressStreet").value,
    CAP:			document.getElementById("userDegreeType").value,
    email:			document.getElementById("userEmail").value,
    annoAccademico:	document.getElementById("academicYear").value,
    annoCorso:		document.getElementById("userYear").value,
    laureaTipo:		document.getElementById("userDegreeType").value,//triennale 1, magistrale 2, ciclo unico 3
    laureaNome:		document.getElementById("userDegree").value,
    university:		document.getElementById("userUniversity").innerHTML,
    collegeName:	document.getElementById("userCollegeName").value //eventualmente sostituire con innerHTML
  }

  const checkUserEmailValid = user.email.match(emailRegex)
  const checkUserPasswordValid = user.password.match(passwordRegex)
  const checkUserCAPValid = user.CAP.match(/[0-9]{5}/) //CAP regex
  const checkUserCFValid = user.CF.match(/[A-Z]{6}\d{2}[A-Z]{1}\d{2}[A-Z]{1}\d{3}[A-Z]{1}/) //CF regex
  const checkUserBirthDateValid = true //TODO aggiungere verifica data nascita (?)

  if (user.firstName == "") {
    return checkName()
  } else if (user.secondName == "") {
    return checkSurname()
  } else if (checkUserEmailValid == null) {
    return checkEmail()
  } else if (checkUserPasswordValid == null) {
    return checkPassword()
  } else if (user.birthPlace == "") {
    return checkBirthPlace()
  } else if (user.birthDate == "" || !checkUserBirthDateValid ) {
    return checkBirthDate()
  } else if (checkUserCFValid == null) {
    return checkCodiceFiscale()
  } else if (user.addressCity == "") {
    return checkAddressCity()
  } else if (user.addressStreet == "") {
    return checkAddressStreet()
  } else if (checkUserCAPValid == null) {
    return checkCAP()
  } else if (user.laureaNome == "") {
    return checkDegreeName()
  } else if (user.laureaTipo == "null") {
    return checkDegreeType()
  } else if (user.annoCorso == "null") {
    return checkYear()
  } else if (user.annoAccademico == "null") {
    return checkAcademicYear()
  } else if (user.collegeName == "null") {
    return checkCollegeName()
  } else if (user.university == "") {
    return checkUniversity()
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(_ => {
        var user = firebase.auth().currentUser
        user.sendEmailVerification()
        //TODO create user on DATABASE HERE
        new swal(
          "Account Created",
          "Your account was created successfully check your email to confirm it"
        ).then(_ => {
          setTimeout(function () {
            window.location.replace("../index.html")
          }, 1000)
        })
      })
      .catch((error) => {
        new swal({
          title: "Error",
          text: error.message,
        })
      })
  }
}


function logIn() {
  const email = document.getElementById("userEmail").value
  const password = document.getElementById("userPassword").value

  const checkUserEmailValid = email.match(emailRegex)
  const checkUserPasswordValid = password.match(passwordRegex)

  if (checkUserEmailValid == null) {
    return checkEmail()
  } else if (checkUserPasswordValid == null) {
    return checkPassword()
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(_ => {
        new swal({
          title: "Succesfully signed in",
        }).then(_ => {
          setTimeout(function () {
            window.location.replace("./pages/profile.html")
          }, 1000)
        })
      })
      .catch((error) => {
        new swal({
          title: "Error",
          text: error.message,
        })
      })
  }
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      new swal({
        type: "successfull",
        title: "Signed Out",
      }).then((value) => {
        setTimeout(function () {
          window.location.replace("../index.html")
        }, 1000)
      })
    })
    .catch(function (error) {
      new swal({
        title: "Error",
        text: error.message,
      })
    })
}

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     //   User is signed in.
//     let user = firebase.auth().currentUser
//     let uid
//     if (user != null) {
//       uid = user.uid
//     }
//     let firebaseRefKey = firebase.database().ref().child(uid)
//     firebaseRefKey.on("value", (dataSnapShot) => {
//       document.getElementById("userPfFullName").innerHTML =
//         dataSnapShot.val().userFullName
//       document.getElementById("userPfSurname").innerHTML =
//         dataSnapShot.val().userSurname
//       // userEmail = dataSnapShot.val().userEmail
//       // userPassword = dataSnapShot.val().userPassword
//       document
//         .getElementById("userPfFb")
//         .setAttribute("href", dataSnapShot.val().userFb)
//       document
//         .getElementById("userPfTw")
//         .setAttribute("href", dataSnapShot.val().userTw)
//       document
//         .getElementById("userPfGp")
//         .setAttribute("href", dataSnapShot.val().userGp)
//       document.getElementById("userPfBio").innerHTML =
//         dataSnapShot.val().userBio
//     })
//   } else {
//     //   No user is signed in.
//   }
// })
