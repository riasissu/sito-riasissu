function addUser(name, surname){
    db.collection("users").add({
        first: surname,
        last: name
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

