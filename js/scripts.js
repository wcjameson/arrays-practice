$(document).ready(function() {
  $("button#submit-form").click(function(event) {
    event.preventDefault();

    const fruit = $("input#fruit").val();
    const movie = $("input#movie").val();
    const game = $("input#game").val();
    const soda = $("input#soda").val();

    let favoriteThings = [];

    favoriteThings.push(fruit);
    favoriteThings.push(movie);
    favoriteThings.push(game);
    favoriteThings.push(soda);

    console.log(favoriteThings);

    const a = favoriteThings[1];
    const b = favoriteThings[0];
    const c = favoriteThings[2];

    let newArray = [];

    newArray.push(a);
    newArray.push(b);
    newArray.push(c);  
    //newArray = [a, b, c];
    console.log(newArray);
    
    $(".answers").show();
    $("#answerA").text(newArray[0]);
    $("#answerB").text(newArray[1]);
    $("#answerC").text(newArray[2]);

});
  });
