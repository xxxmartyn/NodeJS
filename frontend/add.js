
function sendPost(){
    const data = document.getElementById("name").value+";"+document.getElementById("email").value+";"+document.getElementById("address").value;
    console.log(data);
      navigator.sendBeacon('http:localhost:3000/savedetails/'+ data);
      console.log(data);
    }
