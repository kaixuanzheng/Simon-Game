var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var playerInput = [];

function nextSequence() {
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("h1").text("Level " + gamePattern.length);
  setTimeout(function() {
    var time = 0;
    $.each(gamePattern, function(index, value) {
      time += 500;
      setTimeout(function() {
        $("#" + value).toggleClass("pressed");
        var audio = new Audio("sounds/" + value + ".mp3");
        audio.play();
        console.log(gamePattern[index]);
      }, time);
      time += 500;
      setTimeout(function() {
        $("#" + value).toggleClass("pressed");
      }, time);

    });
  }, 1000);
}

//Start a game;
var i = 0;
$(document).keypress(function() {
  if (i == 0) {
    nextSequence();
    i++;
  }
});


var c = 0;
$(".btn").on("click", function() {
  if (i != 0) {
    var audio = new Audio("sounds/" + this.classList[1] + ".mp3");
    audio.play();

    $(this).toggleClass("pressed");
    console.log(this.classList);
    var obj = this;
    setTimeout(function() {
      $(obj).toggleClass("pressed");
    }, 100);

    if (gamePattern[c] == this.classList[1]) {
      c++;
    } else {
      $("h1").html("GAME OVER <br/><br/> Press A Key to Start");
      gamePattern = [];
      i = 0;
      c = 0;
    }

    if (i != 0 && c == gamePattern.length) {
      setTimeout(function() {
        c = 0;
        nextSequence();
      }, 1000);
    }
  }
});
