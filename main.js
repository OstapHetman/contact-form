// Initialize Firebase
var config = {
    apiKey: "AIzaSyC6xEzi9489wOWy4p8UD15pRO7fWWRN4k0",
    authDomain: "contact-form-af48d.firebaseapp.com",
    databaseURL: "https://contact-form-af48d.firebaseio.com",
    projectId: "contact-form-af48d",
    storageBucket: "contact-form-af48d.appspot.com",
    messagingSenderId: "348931944826"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    // Get values 
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

}
// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}