//here we go

//you have to declare things as a variable here and then use them in calculations so that they can return as a integer

//buttons need to be in a separate row so that they don't adjust position when then scoreboard extends to 3 values in width

let sumEl = document.getElementById("sumHomevalue")

let homeScore = 0
let awayScore = 0

function addOnehome () {
homeScore += 1
sumEl.innerText = homeScore
    }

function addTwohome () {
homeScore += 2
sumEl.innerText = homeScore
    }

function addThreehome () {
homeScore += 3
sumEl.innerText = homeScore
    }



