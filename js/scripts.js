$(document).ready(function() {


   $("#run").submit(function(event){

    var words = $("#input").val().split(" ");

alert(words.length);
    var newArray = [];
    words.forEach(function(word){
      if (word.length >= 3){
        newArray.push(word);
      }
    });

alert(newArray.length);
    alert(newArray.reverse().join(" "));
    event.preventDefault();
  });



});
