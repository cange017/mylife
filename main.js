
 var config = {
    apiKey: "AIzaSyDUg3bGKgcYKFpTN8Ucl9nMVcjLmd1yaCA",
    authDomain: "my-life-website.firebaseapp.com",
    databaseURL: "https://my-life-website.firebaseio.com",
    projectId: "my-life-website",
    storageBucket: "",
    messagingSenderId: "119895755441"
  };
  firebase.initializeApp(config);



// ------- index.html data

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

// ------------ happinessgallery.html data

// Get elements
var hap_title_1 = document.getElementById('hap_title_1');

// Create references
var hap_title_1Ref = firebase.database().ref().child("hap_title_1");

hap_title_1Ref.on('value', function(datasnapshot){
    hap_title_1.innerText = datasnapshot.val();
});

// Get elements
var hap_title_2 = document.getElementById('hap_title_2');

// Create references
var hap_title_2Ref = firebase.database().ref().child("hap_title_2");

hap_title_2Ref.on('value', function(datasnapshot){
    hap_title_2.innerText = datasnapshot.val();
});


// -------- about.html data

// Reference comments collection
var commentsRef = firebase.database().ref('comments');

// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);



// Submit form
function submitForm(e) {
    e.preventDefault();
    
// Get values
var name = getInputVal('name');
var email = getInputVal('email');
var number = getInputVal('number');
var comment = getInputVal('comment');
    
    // Save comment
savecomment(name, email, number, comment);
console.log(e);
    
}


function getInputVal(id){
    return document.getElementById(id).value;
}

// Save comment to firebase
function savecomment(name, email, number, comment){
  var newcommentRef = commentsRef.push();
  newcommentRef.set({
    name: name,
    email:email,
    number:number,
    comment:comment
  });
}
/*
var submitBtn = document.getElementById("submitBtn");

function submit() {
    
    var firebaseRef = firebase.database().ref();
    
    var name1 = name.value;
    
    firebaseRef.push().set(name1);
}
*/