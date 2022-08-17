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
  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

  function send() {
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("message").innerHTML="";      
  }
  function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
  }