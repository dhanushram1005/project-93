var firebaseConfig = {
      apiKey: "AIzaSyAeB4YUh57Hkp2NLdIBznmxJu4OFEcs-Vo",
      authDomain: "hero-stores.firebaseapp.com",
      databaseURL: "https://hero-stores-default-rtdb.firebaseio.com",
      projectId: "hero-stores",
      storageBucket: "hero-stores.appspot.com",
      messagingSenderId: "975814235518",
      appId: "1:975814235518:web:b25d9bd6cc6a2c73154f2f",
      measurementId: "G-MFDCHLXLWY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}