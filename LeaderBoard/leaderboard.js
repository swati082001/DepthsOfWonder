let info =JSON.parse(localStorage.getItem("playerinfo"))|| [];
let mapData = document.getElementById("mapData");

console.log(info)
info.sort(function(a,b){
    return b.score-a.score;
})

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