// Get the modal element and button to open it
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const name = document.getElementById("name").value;
const nickname = document.getElementById("nickname").value;

// Open the modal when the button is clicked
btn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the close button is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Retrieve the player information from localStorage or initialize an empty array
let info =JSON.parse(localStorage.getItem("playerinfo"))|| [];

// Handle the form submission
function handleSubmit(event){
   event.preventDefault();

  // Create a new player object with the submitted name, nickname, and initial score
   let playerinfo = {
    name:document.getElementById("name").value,
    nickname:document.getElementById("nickname").value,
    score:0
   };
   
   let flag = false;
   // Check if the player already exists in the info array
   info.map((el)=>{
     if(el.name=== playerinfo.name && el.nickname===playerinfo.nickname){
       flag = true;
     }
   })

   if(flag===false){
    // Add the new player to the info array and store it in localStorage
     info.push(playerinfo);
     localStorage.setItem("currentPlayer",JSON.stringify(playerinfo));
     localStorage.setItem("playerinfo",JSON.stringify(info));
     
   }
   else{
    // Update the current player in localStorage
    localStorage.setItem("currentPlayer",JSON.stringify(playerinfo));
   }
   
   // Redirect to the game page after a delay
   setTimeout(()=>{
     window.location.href = "./Game Section/game.html"

   },1000)

}