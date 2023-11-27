
var wins = 0;
var losses=0;
var ties=0;

var limit =10;
var start=0;

  var confirmPlay = confirm("Do you want to play?");
  console.log(confirmPlay);

  while (confirmPlay){
    const choices = ["R", "P", "S"];
    var compChoice = choices[Math.floor(Math.random() * choices.length)];
    var myChoiceQuestion = prompt("Choose R, P or S");
    if (myChoiceQuestion == ""){
        alert("You must enter a choise");
    }

    myChoiceQuestion = myChoiceQuestion.toUpperCase();
    
            console.log("youre choice: " + myChoiceQuestion);
            console.log("Computer choice: " + compChoice)
            
            if (myChoiceQuestion == compChoice){
                ties++;
                console.log("tie");
                alert("it is a tie");
                alert("Ties: " + ties + " " + "Wins: "  + " "+ wins + " " + "Losses: " + losses);
                confirmPlay = confirm("Do you want to play?");
            }else if (myChoiceQuestion == "R" && compChoice == choices[1] || myChoiceQuestion == "P" && compChoice == choices[2] || myChoiceQuestion == "S" && compChoice == choices[0] ){
                losses++;
                console.log("loss");
                alert("You lose");
                alert("Ties: " + ties + " " + "Wins: "  + " "+ wins + " " + "Losses: " + losses);
                confirmPlay = confirm("Do you want to play?");
            }else if(myChoiceQuestion == "") {
                 ties = ties;
                 wins = wins;
                 losses = losses;

            }            
            
            else {
                wins++;
                alert("You won!");
                console.log("Win");
                alert("Ties: " + ties + " " + "Wins: "  + " "+ wins + " " + "Losses: " + losses);
                confirmPlay = confirm("Do you want to play?");
            
            }
            
            
            console.log("ties: " + ties);
            console.log("wins: " + wins);
            console.log("losses:" +  losses);


        



  }

   
    
    
















