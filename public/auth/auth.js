function signUp() {
  //   var name = document.getElementById("userName").value
  //   var surname = document.getElementById("userSurname").value
  const user = {
    firstName,
    secondName,
    password,
    birthPlace,
    birthDate,
    CF,
    addressCity,
    addressStreet,
    CAP,
    email,
    annoAccademico,
    annoCorso,
    laureaTipo,//triennale 1, magistrale 2, ciclo unico 3
    laureaNome,
    university,
    collegeName
  }

  const checkUserEmailValid = email.match(emailRegex)
  const checkUserPasswordValid = password.match(passwordRegex)

  if (name == "") {
    return checkName()
  } else if (surname == "") {
    return checkSurname()
  } else if (checkUserEmailValid == null) {
    return checkEmail()
  } else if (checkUserPasswordValid == null) {
    return checkPassword()
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
