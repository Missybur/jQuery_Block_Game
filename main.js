$(document).ready(init);
function init () {
  var randomNumber = Math.floor(Math.random()*9);
  var turnsRemaining = 3;
  var $counter = $(#counter);
  var gameStates = {
    'on': 'Treasure Hunt',
    'won': 'You won!',
    'lost': 'Game Over'
  };
var gameState = gameStates['on'];
   // on, won, lost
  $counter.text(turnsRemaining);
  var isGameStillOn = function() {
    return gameState === 'on';
  }
  var changeGameState = function(newState) {
    gameState = newState;
    $("#headerMessage").text(newState);
  };

  var handleClick = function(event) {\
    if (isGameStillOn()) {
      event.preventDefault();
      decrementTurnsRemaining();
      var $link = $(this);
      $link.addClass( $link.data("id") === randomNumber ? "winner" : "loser");
      if (correctAnswer) {
        changeGameState('You won!');
        return; // breaking out of the function
      }
    }
    if (turnsRemaining === 0) {
      changeGameState = 'You Lost!';
    }
  };

$(".btn").on("click" , handleClick);

    var decrementTurnsRemaining = function() {
      $("counter").text(turnsRemaining--);
    };
  }
});


// var cellClass;

//   $('.box').on({
//     mouseover: function() {
//       ($link).css({background: '#FF0000'});
//     },
//     mouseleave: function(){
//       ($link).css({background: '#000000'})
//     },
//     click: function(){
//       ($link).off('mouseleave');
//     }
//   });
// }
