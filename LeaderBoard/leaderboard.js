// Retrieve player information from local storage or initialize an empty array
let info =JSON.parse(localStorage.getItem("playerinfo"))|| [];
// Get the mapData element from the DOM
let mapData = document.getElementById("mapData");

console.log(info)

// Sort the player information based on score in descending order
info.sort(function(a,b){
    return b.score-a.score;
})

// Iterate over the player information and create table rows with the data
info.map((el)=>{
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = el.name;

    let nickname = document.createElement("td")
    nickname.innerText = el.nickname;

    let score = document.createElement("td")
    score.innerText = el.score;

    tr.append(name,nickname,score);
    mapData.append(tr)
    console.log(el)
})