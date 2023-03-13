// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.addMessage = functions.https.onCall(async (data, context) => {

    const text = data.text;
    const writeResult = await admin.firestore().collection('messages').add({text: text});
    return({result: `Message with ID: ${writeResult.id} added.`});
  });


exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
    .onCreate((snap, context) => {
      const original = snap.data().text;

      functions.logger.log('Uppercasing', context.params.documentId, original);
      
      const uppercase = original.toUpperCase();

      return snap.ref.set({uppercase}, {merge: true});
    });

  
  

exports.signUp = functions.https.onCall(async function (data, context){

  return admin.auth().createUser({
    email: data.name,
    emailVerified: false,
    password: data.password
  })

})
  