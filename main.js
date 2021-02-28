var firebaseConfig = {
    apiKey: "AIzaSyA_G-97OgEHLBymsyZETQ3KNfM4uPKStdo",
    authDomain: "stacat-project-2.firebaseapp.com",
    databaseURL: "https://stacat-project-2-default-rtdb.firebaseio.com",
    projectId: "stacat-project-2",
    storageBucket: "stacat-project-2.appspot.com",
    messagingSenderId: "536101092270",
    appId: "1:536101092270:web:c12dce9881be2659f5e63f",
    measurementId: "G-8YSLC0L4W1",
    databaseURL: "https://stacat-project-2-default-rtdb.firebaseio.com/"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var usern = localStorage.getItem("un");
document.getElementById("name").innerHTML = "Welcome " + usern + "!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

function addRoom() {
    var roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "Adding Room"
    });
    localStorage.setItem("roomname", roomname);
    window.location = "chat.html";
}
var date = new Date;

function getData() {
    firebase.database().ref().on('value', function (snapshot) {
        document.getElementById("holder").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            var roomnames = childKey;
            console.log("Room Name - " + roomnames);
            var row = "<div class='inner' id=" + roomnames + " onclick='redirectToRoom(this.id)'> " + roomnames + " - Created By " + usern + " On " + date.getDate() + " / " 
            + date.getMonth() + " / " + date.getFullYear() +"</div>";
            document.getElementById("holder").innerHTML += row;
        });
    });
}
getData();
function redirectToRoom(name) {
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "chat.html";
}
