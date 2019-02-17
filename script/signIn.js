var config = {
    apiKey: "AIzaSyA9svkKUK2eGzlEY50u9vgOBhoFmk7YMLg",
    authDomain: "saylani-bloodbank.firebaseapp.com",
    databaseURL: "https://saylani-bloodbank.firebaseio.com",
    projectId: "saylani-bloodbank",
    storageBucket: "",
    messagingSenderId: "286331141839"
};
firebase.initializeApp(config);

function signIn() {
    let email = document.getElementById("email").value
    let pwd = document.getElementById("pwd").value
    firebase.auth().signInWithEmailAndPassword(email, pwd)
        .then((success) => {
            swal({
                title: "Log In Successfully!",
                text: "Now you can proceed to our website",
                icon: "success",
            }).then(() => {
                window.location = "../pages/home.html"
            })
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "Error Found",
                text: errorMessage,
                icon: "error",
            })
        })
}

