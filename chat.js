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
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
document.getElementById("room").innerHTML = roomname;
function send() {
    msg = document.getElementById("chat").value;
    firebase.database().ref(roomname).push({
        name: username,
        msg: msg,
        like: 0
    });
    document.getElementById("chat").innerHTML = "";
}
function getData() {
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;}}
    )});
    console.log(message_data);
    name = message_data['name'];
    message = message_data['msg'];
    like = message_data['like'];
    nameTag = "<h4>" + name + "<img src='S.png' style='width: 20px; height:20px;'></h4>";
    msgTag = "<h5>" + message + "</h5>";
    likeTag = "<button class='button' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'>";
    spanTag = "<span class='glyphicon glyphicon-thumbs-up'>Like:  " + like + "</span></button><hr>";
    row = nameTag + msgTag + likeTag + spanTag; 
    document.getElementById("chatHolder").innerHTML = row;
}
getData();
