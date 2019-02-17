var config = {
    apiKey: "AIzaSyA9svkKUK2eGzlEY50u9vgOBhoFmk7YMLg",
    authDomain: "saylani-bloodbank.firebaseapp.com",
    databaseURL: "https://saylani-bloodbank.firebaseio.com",
    projectId: "saylani-bloodbank",
    storageBucket: "",
    messagingSenderId: "286331141839"
};
firebase.initializeApp(config);


function signUp() {
    let name = document.getElementById("name").value
    let contact = document.getElementById("contact").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let pwd = document.getElementById("pwd").value
    let blgr = document.getElementById("blgr").value
    let type = document.getElementById("type").value

    let userObj = {
        name,
        contact,
        age,
        email,
        blgr,
        type,
    }

    localStorage.setItem("userData", JSON.stringify(userObj))
    if (contact.length === 11) {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .then((success) => {
                let uid = firebase.auth().currentUser.uid
                firebase.database().ref("users/" + uid).set(userObj)
                // .then(() => {
                if (blgr === "A+" && type === "Donor") {
                    firebase.database().ref("Donors/A+/" + uid).set(userObj)
                }
                else if (blgr === "A-" && type === "Donor") {
                    firebase.database().ref("Donors/A-/" + uid).set(userObj)
                }
                else if (blgr === "B+" && type === "Donor") {
                    firebase.database().ref("Donors/B+/" + uid).set(userObj)
                }
                else if (blgr === "B-" && type === "Donor") {
                    firebase.database().ref("Donors/B-/" + uid).set(userObj)
                }
                else if (blgr === "AB+" && type === "Donor") {
                    firebase.database().ref("Donors/AB+/" + uid).set(userObj)
                }
                else if (blgr === "AB-" && type === "Donor") {
                    firebase.database().ref("Donors/AB-/" + uid).set(userObj)
                }
                else if (blgr === "O+" && type === "Donor") {
                    firebase.database().ref("Donors/O+/" + uid).set(userObj)
                }
                else if (blgr === "O-" && type === "Donor") {
                    firebase.database().ref("Donors/O-/" + uid).set(userObj)
                }
                else {
                    console.log("Please add something")
                }
                if (blgr === "A+" && type === "Acceptor") {
                    firebase.database().ref("Acceptors/A+/" + uid).set(userObj)
                }
                else if (blgr === "A-" && type === "Acceptor") {
                    firebase.database().ref("Acceptors/A-/" + uid).set(userObj)
                }
                else if (blgr === "B+" && type === "Acceptor") {
                    firebase.database().ref("Acceptors/B+/" + uid).set(userObj)
                }
                else if (blgr === "B-" && type === "Acceptor") {
                    firebase.database().ref("Acceptors/B-/" + uid).set(userObj)
                }
                else if (blgr === "AB+" && type === "Acceptor") {
                    firebase.database().ref("Acceptors/AB+/" + uid).set(userObj)
                }
                else if (blgr === "AB-" && type === "Acceptor") {
                    firebase.database().ref("Acceptors/AB-/" + uid).set(userObj)
                }
                else if (blgr === "O+" && type === "Acceptor") {
                    firebase.database().ref("Acceptors/O+/" + uid).set(userObj)
                }
                else if (blgr === "O-" && type === "Acceptor") {
                    firebase.database().ref("Acceptors/O-/" + uid).set(userObj)
                }
                else {
                    console.log("Please add something")
                }
                // })
                swal({
                    title: "Sign Up Successfully!",
                    text: "Please login to proceed",
                    icon: "success",
                }).then(() => {
                    window.location = "../pages/signIn.html"
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
            });
    } else {
        swal({
            title: "Error Found",
            text: "Contact should be equal to 11 digits",
            icon: "error",
        })
    }
}