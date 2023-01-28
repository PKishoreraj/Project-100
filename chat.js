const firebaseConfig = {
    apiKey: "AIzaSyDsUrMWpmozmuyYk4gPuB0PwdcmctnpQTc",
    authDomain: "lets-meet-74cf9.firebaseapp.com",
    projectId: "lets-meet-74cf9",
    storageBucket: "lets-meet-74cf9.appspot.com",
    messagingSenderId: "688289518236",
    appId: "1:688289518236:web:ccf0d24a075fdf88269359"
  };
  
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    
}



