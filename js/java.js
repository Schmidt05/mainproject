$(document).ready(function() {

  $(".move, .move1, .move2, .move3, .move4").draggable( {revert: "invalid", stack: "div", containment: "body"} );

  $(".target").droppable({
  drop: function() {
  }
 });

});
