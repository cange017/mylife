var fireHeading = document.getElementById("fireHeading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
    fireHeading.innerText = datasnapshot.val();
});

// ---------- //

var message = document.getElementById("message");

var messageRef = firebase.database().ref().child("Message");

messageRef.on('value', function(datasnapshot){
    message.innerText = datasnapshot.val();
});

// ------------ //

