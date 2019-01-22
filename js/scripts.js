$(document).ready(function() {


   $("#run").submit(function(event){
     var input = $("#input").val();

     var arrays = input.split(' ');
     alert('length ' + arrays.length);
     var alterArray = arrays.map(function(array) {
      alert("1st " + array + ' ' + array.length);
      if (array.length >= 3 && ($.trim(array) !== '')) {
         alert("2nd " + array + ' ' + array.length);
         return array;
      }
     });

     alert(alterArray.length);
     alert(alterArray.reverse().join(' '));

     event.preventDefault();
   });



 });
































  //
  //   var words = $("#input").val().split(" ");
  //
  //   var newArray = words.map(function(word){
  //     if (word.length >= 3){
  //       return word;
  //     }
  //   });
  //
  //   alert(newArray.reverse().join(" "));
//     event.preventDefault();
//   });
//
//
//
// });
