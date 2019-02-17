var config = {
    apiKey: "AIzaSyA9svkKUK2eGzlEY50u9vgOBhoFmk7YMLg",
    authDomain: "saylani-bloodbank.firebaseapp.com",
    databaseURL: "https://saylani-bloodbank.firebaseio.com",
    projectId: "saylani-bloodbank",
    storageBucket: "",
    messagingSenderId: "286331141839"
};
firebase.initializeApp(config);


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../serwor.js')
        .then(() => {
            console.log('Service Worker presents')
        })
}

setTimeout(() => {
    let uid = firebase.auth().currentUser.uid
    let ref = firebase.database().ref("/users/" + uid).on('value', (data) => {
        let a = Object.entries(data.val())
        let blgr = a[1][1]
        let type = a[5][1]
        if (type === "Donor" && blgr === "A+") {
            document.getElementById("heading").innerText = "Blood Acceptors"
            let ref = firebase.database().ref("Acceptors/A+").on('value', (data) => {
                for (let i = 0; i < a.length; i++) {
                    let a = Object.entries(data.val())
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group:  " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Donor" && blgr === "A-") {
            document.getElementById("heading").innerText = "Blood Acceptors"
            let ref = firebase.database().ref("Acceptors/A-").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group:  " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Donor" && blgr === "B+") {
            document.getElementById("heading").innerText = "Blood Acceptors"
            let ref = firebase.database().ref("Acceptors/B+").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Donor" && blgr === "B-") {
            document.getElementById("heading").innerText = "Blood Acceptors"
            let ref = firebase.database().ref("Acceptors/B-").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.lengFth; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Donor" && blgr === "AB+") {
            document.getElementById("heading").innerText = "Blood Acceptors"
            let ref = firebase.database().ref("Acceptors/AB+").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Donor" && blgr === "AB-") {
            document.getElementById("heading").innerText = "Blood Acceptors"
            let ref = firebase.database().ref("Acceptors/AB-").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Donor" && blgr === "O+") {
            document.getElementById("heading").innerText = "Blood Acceptors"
            let ref = firebase.database().ref("Acceptors/O+").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Donor" && blgr === "O-") {
            document.getElementById("heading").innerText = "Blood Acceptors"
            let ref = firebase.database().ref("Acceptors/O-").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        } else {
            console.log("Please add something")
        }
        if (type === "Acceptor" && blgr === "A+") {
            document.getElementById("heading").innerText = "Blood Donors"
            let ref = firebase.database().ref("Donors/A+").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Acceptor" && blgr === "A-") {
            document.getElementById("heading").innerText = "Blood Donors"
            let ref = firebase.database().ref("Donors/A-").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Acceptor" && blgr === "B+") {
            document.getElementById("heading").innerText = "Blood Donors"
            let ref = firebase.database().ref("Donors/B+").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Acceptor" && blgr === "B-") {
            document.getElementById("heading").innerText = "Blood Donors"
            let ref = firebase.database().ref("Donors/B-").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Acceptor" && blgr === "AB+") {
            document.getElementById("heading").innerText = "Blood Donors"
            let ref = firebase.database().ref("Donors/AB+").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Acceptor" && blgr === "AB-") {
            document.getElementById("heading").innerText = "Blood Donors"
            let ref = firebase.database().ref("Donors/AB-").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Acceptor" && blgr === "O+") {
            document.getElementById("heading").innerText = "Blood Donors"
            let ref = firebase.database().ref("Donors/O+").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        }
        else if (type === "Acceptor" && blgr === "O-") {
            document.getElementById("heading").innerText = "Blood Donors"
            let ref = firebase.database().ref("Donors/O-").on('value', (data) => {
                let a = Object.entries(data.val())
                for (let i = 0; i < a.length; i++) {
                    document.getElementById("main").innerHTML += "<div class='well'> <h5> Name: " + a[i][1].name + "</h5> <h5> Age: " + a[i][1].age + "</h5> <h5> Contact: " + a[i][1].contact + "</h5> <h5> Blood Group: " + a[i][1].blgr + "</h5> </div>"
                }
            })
        } else {
            console.log("Please add something")
        }
    })
}, 3000)

function logout() {
    firebase.auth().signOut()
        .then((success) => {
            swal({
                title: "Good ob",
                text: "Sign Out Successfully",
                icon: "success",
            }).then(() => {
                window.location = "../index.html"
            })
            // Sign-out successful.
        }).catch((error) => {
            let errorMessage = error.message;
            console.log(errorMessage)
            // An error happened.
        });
}