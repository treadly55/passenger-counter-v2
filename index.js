//here we go

//you have to declare things as a variable here and then use them in calculations so that they can return as a integer

//buttons need to be in a separate row so that they don't adjust position when then scoreboard extends to 3 values in width


//assign variables to html elements//
let sumEl = document.getElementById("sumHomevalue")
let sumElaway = document.getElementById("sumAwayvalue")

//declare variables//
let homeScore = 0
let awayScore = 0


//functions for away scoreboard //
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

//functions for away scoreboard //
function addOneAway () {
awayScore += 1
sumElaway.innerText = awayScore
    }

function addTwoAway () {
awayScore += 2
sumElaway.innerText = awayScore
    } 

function addThreeAway () {
awayScore += 3
sumElaway.innerText = awayScore
    }
