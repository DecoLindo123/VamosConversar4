
  const firebaseConfig = {
    apiKey: "AIzaSyBHGbruztL0ZgDTLFkg6xYZyYM7_EoC-5s",
    authDomain: "vamosconversar-5d8ba.firebaseapp.com",
    projectId: "vamosconversar-5d8ba",
    storageBucket: "vamosconversar-5d8ba.appspot.com",
    messagingSenderId: "221811834460",
    appId: "1:221811834460:web:54efa907066d5bd30d3099"
  };
  
  const app = initializeApp(firebaseConfig);

  
    userName = localStorage.getItem("userName");
  
  document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
  
  function addRoom()
  {
    roomName = document.getElementById("roomName").value;
  
    firebase.database().ref("/").child(roomName).update({
      purpose : "Adicionar nome de sala"
    });
  
      localStorage.setItem("roomName", roomName);
      
      window.location = "kwitterPage.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         roomNames = childKey;
         console.log("Nome da Sala - " + roomNames);
        row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("roomName", name);
      window.location = "kwitterPage.html";
  }
  
  function logout() {
    
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
      window.location = "index.html";
  }
  
  function send()
{
msg - document.getElementById("msg").value;
firebase.database().ref(roomName).push(f
name: userName,
message :msg,
like:0
});
document-getElementById("msg").value = "";
}
