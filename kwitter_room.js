user_name = localStorage.getItem("user_name");

var firebaseConfig = {
  apiKey: "AIzaSyDUh03F_qIciB_o5gYjUDS7XG4frj5pobU",
  authDomain: "kwitter-a6366.firebaseapp.com",
  databaseURL: "https://kwitter-a6366-default-rtdb.firebaseio.com",
  projectId: "kwitter-a6366",
  storageBucket: "kwitter-a6366.appspot.com",
  messagingSenderId: "314298468581",
  appId: "1:314298468581:web:d689d52fb9553a69bfac0c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"

  });
}

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
  row = "<div class= 'room_name' id=" + Room_names + " onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

