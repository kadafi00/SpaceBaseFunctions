function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;

    if (sum == 7 || sum == 11) {
        document.getElementById("FinalRes").innerHTML = "CRAPS - you lose";
    }
    // This line takes the number 7 and 11 and assigns the statement, "CRAPS - you lose" if either of those numbers come up when the equations take place
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("FinalRes").innerHTML = "DOUBLES - you win";
        // This line takes die1 and die2 which are random numbers multiplied by 6 then mods those by two
        // If you get a number that fits those parameters you get the statement, " Doubles - you win"
    } else {
        document.getElementById("FinalRes").innerHTML = "Draw - You did not win or lose, please try again.";
        // This line takes the random number that has been mulitplied by 6 and if it is any number that isn't one that does not fit the parameters of the functions above
        // It states, "Draw - You did not win or lose, please try again."

        // This whole function runs the onclick button and allows you to play craps
        // Stating various things whether you win, lose or draw
    }
}
function blastOff() {
    var currTime = 50;
    document.getElementById("countDownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
    }, 50000);
    // This function runs the onclick button and begins the countdown timer from 50 to 0 in 5's
    // It then states Blast Off! as it finishes
    // It does this using the var currTime and the equations listed, subtracting from the intial number of 50 by 5's
}