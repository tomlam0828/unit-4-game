$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 1);
    var num1 = Math.floor(Math.random() * 10 + 1);
    var num2 = Math.floor(Math.random() * 10 + 1);
    var num3 = Math.floor(Math.random() * 10 + 1);
    var num4 = Math.floor(Math.random() * 10 + 1);

    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    $("#user-wins").text(wins);
    $("#user-losses").text(losses);
    $("#display-number").text(random);

    function yes() {
        alert("Oh Yeah you won");
        wins++;
        $("#user-wins").text(wins);
        reset();
    }

    function lose() {
        alert("Oh no you lost!");
        losses++;
        $("#user-losses").text(losses);
        reset();
    }

    function reset() {
        random = Math.floor(Math.random() * 101 + 1);
        num1 = Math.floor(Math.random() * 10 + 1);
        num2 = Math.floor(Math.random() * 10 + 1);
        num3 = Math.floor(Math.random() * 10 + 1);
        num4 = Math.floor(Math.random() * 10 + 1);
        userTotal = 0;
        $("#display-number").text(random);
        $("#total-score").text(userTotal);     
    }

    $("#ruby").on("click", function () {
        userTotal = userTotal + num1;
        $("#total-score").text(userTotal);
        if (userTotal === random) {
            yes();
        } else if (userTotal > random) {
            lose();
        }
    })
    
    $("#diamond").on("click", function () {
        userTotal = userTotal + num2;
        $("#total-score").text(userTotal);
        if (userTotal === random) {
            yes();
        } else if (userTotal > random) {
            lose();
        }
    })

    $("#yellow-stone").on("click", function () {
        userTotal = userTotal + num3;
        $("#total-score").text(userTotal);
        if (userTotal === random) {
            yes();
        } else if (userTotal > random) {
            lose();
        }
    })

    $("#emerald").on("click", function () {
        userTotal = userTotal + num4;
        $("#total-score").text(userTotal);
        if (userTotal === random) {
            yes();
        } else if (userTotal > random) {
            lose();
        }
    })
})
