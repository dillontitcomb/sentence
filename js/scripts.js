$(document).ready(function() {
  $("form#sentenceForm").submit(function(event) {
    var sentenceValue = $("#sentenceInput").val();
    var sentenceArray = sentenceValue.split(" ");
    var result = sentenceArray.filter(word => word.length >= 3);
    var reverseSentence = result.reverse();
    var sentenceJoin = reverseSentence.join(" ") + "!";

    $("p#listAfter").text(sentenceJoin);
   event.preventDefault();
  });
});
