const firebaseConfig = {
    apiKey: "AIzaSyCmg5ZTalu4dWZpGqQ7QggveQ5p-GbiCDc",
    authDomain: "lestmeet.firebaseapp.com",
    projectId: "lestmeet",
    storageBucket: "lestmeet.appspot.com",
    messagingSenderId: "869299174448",
    appId: "1:869299174448:web:0c5a8597ff373bd5e681f5"
  };
  
  const app = initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
console.log("room_name-"+room_name);
row="<div class='room_name'id="+room_name+"onclick='redirecttoroomname(this.id)'>8"+room_name+"</div><hr>";
document.getElementById("output").innerHTML+=row;
   });});}
getData();

function logout()
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter.html";
}