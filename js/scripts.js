$(document).ready(function() {


   $("#run").submit(function(event){

    var words = $("#input").val().split(" ");

//alert(words.length);
    var newArray = words.map(function(word){

      if (word.length >= 3){
        return word;
      }

    });

//alert(newArray.length);
    alert(newArray.reverse().join(" "));
    event.preventDefault();
  });



});
