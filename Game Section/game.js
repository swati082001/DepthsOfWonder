
// Retrieve the current player information from local storage
let currentPlayer = JSON.parse(localStorage.getItem("currentPlayer"));
// Retrieve player information from local storage or initialize an empty array
let info =JSON.parse(localStorage.getItem("playerinfo"))|| [];
let scorecount = document.getElementById("scorecount")
console.log(currentPlayer)

// Winning sound
win = new Audio();
    win.src = "./Audio/Audio_won.wav";
      
    // Losing sound
    lose = new Audio();
    lose.src = "./Audio/Audio_dead.mp3";
    
    
    
    cross = true;
    score = 0;
    scorecount.innerHTML = `${currentPlayer.nickname} score : ` + score;

//for the movement of the player
document.onkeydown = function(e) {
    if (e.keyCode == 38) { // Up arrow key
        player = document.querySelector('.scuba');
        playery = parseInt(window.getComputedStyle(
            player, null).getPropertyValue('bottom'));
        player.style.bottom = playery + 112 + "px";
    }
    if (e.keyCode == 40) { // Down arrow key
        player = document.querySelector('.scuba');
        playery = parseInt(window.getComputedStyle(
            player, null).getPropertyValue('bottom'));
        player.style.bottom = playery - 112 + "px";
    }
    if (e.keyCode == 37) { // Left arrow key
        player = document.querySelector('.scuba');
        playerx = parseInt(window.getComputedStyle(
            player, null).getPropertyValue('left'));
        if (playerx > 0) {
            player.style.left = playerx - 112 + "px";
        }
    }
    if (e.keyCode == 39) { // Right arrow key
        player = document.querySelector('.scuba');
        playerx = parseInt(window.getComputedStyle(
            player, null).getPropertyValue('left'));
        if (playerx < 1024) {
            player.style.left = (playerx + 112) + "px";
        }
    }
}

//contains logic of collison detection of the player with the obstacle
setInterval(() => {
    player = document.querySelector('.scuba');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    won = document.querySelector(".won")

    //to get the current position of the player
    dx = parseInt(window.getComputedStyle(
        player, null).getPropertyValue('left'));

    dy = parseInt(window.getComputedStyle(
        player, null).getPropertyValue('bottom'));

    //to get the current position of the obstacle
    ox = parseInt(window.getComputedStyle(
        obstacle, null).getPropertyValue('left'));

    oy = parseInt(window.getComputedStyle(
        obstacle, null).getPropertyValue('bottom'));

        //calculates the horizontal and the vertical distances
    offsetx = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);



    if (offsetx < 100 && offsety <= 146) {
        if (score != 0)
            scorecount.innerHTML = `${currentPlayer.nickname} score : ` + score;
           gameover.style.visibility = 'visible';
           lose.play();
           obstacle.classList.remove('animate');

           setTimeout(()=>{

               window.location.href="../LeaderBoard/leaderboard.html"
           },2000)
    } 
    
    else if (offsetx < 125 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        

        if (score >= 10) {
            info.forEach((el) => {
                if (el.name === currentPlayer.name && el.nickname === currentPlayer.nickname) {
                    el.score += 10; // Add the score to the previous score
                }
            });
        
            localStorage.setItem("playerinfo", JSON.stringify(info));
            won.style.visibility = 'visible';
            win.play();
            obstacle.classList.remove('animate');
            clearInterval();
            setTimeout(()=>{
                window.location.href="../LeaderBoard/leaderboard.html"
            },2000)
        }

        setTimeout(() => {
            cross = true;
        }, 1000);

        //to decrease the duration after every one sec
        setInterval(() => {
            obsanidur = parseFloat(window
            .getComputedStyle(obstacle, null)
            .getPropertyValue('animation-duration'));

            obstacle.style.animationDuration
                = obsanidur - 0.01 + 's';
        }, 500);
    }
}, 100);

function updateScore(score) {
    scorecount.innerHTML = `${currentPlayer.nickname} score : ` + score;


}