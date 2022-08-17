var firebaseConfig = {
      apiKey: "AIzaSyCkaoXcHmIdQspl3Uv83ZxNe2g1ps-T6bs",
      authDomain: "practicekwitter-c6160.firebaseapp.com",
      databaseURL: "https://practicekwitter-c6160-default-rtdb.firebaseio.com",
      projectId: "practicekwitter-c6160",
      storageBucket: "practicekwitter-c6160.appspot.com",
      messagingSenderId: "675449833405",
      appId: "1:675449833405:web:f920af1c642975cc2ff4d4"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     
     document.getElementById("welcome").innerHTML="Welcome "+user_name;
     function addroom() {
         room_name=document.getElementById("addroom").value;
         firebase.database().red("/").child(room_name).update({
             purpose: "add a room"
         });    
         localStorage.setItem("room_name",room_name);
         window.location="letsChat_page.html";
     }
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name-" + Room_names);
       row="div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + 
       Room_names + "</div>"
       document.getElementById("output").innerHTML +=row;
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("name",name);
      window.location=("letsChat_page.html");
}
function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}