var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const name = document.getElementById("name").value;
const nickname = document.getElementById("nickname").value;

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let info =JSON.parse(localStorage.getItem("playerinfo"))|| [];


function handleSubmit(event){
   event.preventDefault();

   let playerinfo = {
    name:document.getElementById("name").value,
    nickname:document.getElementById("nickname").value,
    score:0
   };
   
   let flag = false;
   info.map((el)=>{
     if(el.name=== playerinfo.name && el.nickname===playerinfo.nickname){
       flag = true;
     }
   })

   if(flag===false){

     info.push(playerinfo);
     localStorage.setItem("currentPlayer",JSON.stringify(playerinfo));
     localStorage.setItem("playerinfo",JSON.stringify(info));
     
   }
   else{
    localStorage.setItem("currentPlayer",JSON.stringify(playerinfo));
   }
   
   setTimeout(()=>{
     window.location.href = "./Game Section/game.html"

   },1000)

}