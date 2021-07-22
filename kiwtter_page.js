var firebaseConfig = {
  apiKey: "AIzaSyAnZ8Dq9iA5eXiQTjstILo6iTS7W3tTork",
  authDomain: "lets-chat-app-8ccb4.firebaseapp.com",
  databaseURL: "https://lets-chat-app-8ccb4-default-rtdb.firebaseio.com",
  projectId: "lets-chat-app-8ccb4",
  storageBucket: "lets-chat-app-8ccb4.appspot.com",
  messagingSenderId: "11655813380",
  appId: "1:11655813380:web:9a9076b6af69aa83641851"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value="";
}
function out()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}