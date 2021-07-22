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
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML
    Room_names = childKey;
    
  console.log("Room Name - "+Room_names);
  row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML +=row;
   
    });}
  getData();
  function addRoom()
  {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name) .update({
  purpose:"adding room name"
  }) ;
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
  }
  function redirectToRoomName(name)
  {
  console.log(name);
  localStorage.setItem("room_name",name) ;
  window.location="kwitter_roomPage.html";
  }  
  function logout()
  {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  }