$(document).ready(function() {
  var random = Math.floor(Math.random()*101+19)

  $("#display-number").text(random);

  var num1 = Math.floor(Math.random()*11+1);
  var num2 = Math.floor(Math.random()*11+1);
  var num3 = Math.floor(Math.random()*11+1);
  var num4 = Math.floor(Math.random()*11+1);

  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $("#user-wins").text(wins);
  $("#user-losses").text(losses);

  function reset() {
    var random = Math.floor(Math.random()*101+19);
    $("#display-number").text(random);

    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    userTotal = 0;
    $("#total-score").text(wins);
    // reset();
  }

  function yay() {
      alert("Yeah you won the game!");
      wins++;
      $("#user-wins").text(wins);
      reset();
  }

  function loser() {
      alert("Oh no, you lost, please try again!");
      losses++;
      $("#user-losses").text(losses);
      reset()
  }

  $("#ruby").on("click", function() {
      userTotal = userTotal + num1;
      $("#total-score").text(userTotal);
      if (userTotal === random) {
          yay();
      } else if (userTotal > random) {
         loser();
      }

  })

  $("#diamond").on("click", function() {
      userTotal = userTotal + num2;
      $("#total-score").text(userTotal);
      if (userTotal === random) {
        yay();
    } else if (userTotal > random) {
       loser();
    }
  })

  $("#yellow-stone").on("click", function() {
      userTotal = userTotal + num3;
      $("#total-score").text(userTotal);
      if (userTotal === random) {
        yay();
    } else if (userTotal > random) {
       loser();
    }
  })

  $("#emerald").on("click", function() {
      userTotal = userTotal + num4;
      $("#total-score").text(userTotal);
      if (userTotal === random) {
        yay();
    } else if (userTotal > random) {
       loser();
    }
  });
});