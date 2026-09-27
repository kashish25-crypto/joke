let button = document.getElementById("btn");
let show = document.getElementById("show");

button.addEventListener("click", function () {

    fetch("https://official-joke-api.appspot.com/random_joke")

       .then(function(response){
           return response.json();
       })

       .then(function(data){
         show.innerText = data.setup + " " + data.punchline;
          
       })
       .catch(function(error){
        show.innerText = "something went wrong!";
       });
    });