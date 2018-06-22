var correct = 0;
var incorrect = 0;

$(document).ready(function(){
    counter();
    function counter(){
        var counter = 59;
        var countDown = setInterval(function(){
            var a = $("#timer").text(counter);
            console.log(countDown);
            counter--;
            if(counter==0){
                console.log("timeup");  
                clearInterval(countDown);
                answers();
            }
        }, 1000);
    }

    function correctAnswer(answer, question){
        var value = $("input[name="+question+"]:checked").val();
        if(value  == answer){
            correct++;
        }else{
            incorrect++;
        }
    }
    $("button").click(function(){
        answers();
    })

    function answers(){
        correctAnswer("Not today", "question1");
        correctAnswer("Targaryen", "question2");
        correctAnswer("Dragonstone", "question3");
        correctAnswer("Cobbler", "question4");
        correctAnswer("Kingslayer", "question5");
        correctAnswer("Bear", "question6");
        correctAnswer("With a melted golden crown", "question7");
        correctAnswer("Podrick Payne", "question8");
        correctAnswer("Nothing", "question9");
        correctAnswer("Oberyn Martell", "question10");
        console.log("correct " + correct);
        console.log("Incorrect " + incorrect);
        $('.container').empty();
        createResult(correct, incorrect);
    }

    function createResult(correct, incorrect){
        var correct = $("<p></p>").text("Correct Answers: " + correct);
        var incorrect = $("<p></p>").text("Inorrect Answers: " + incorrect);
        var txt2 = $("<p></p>").text("Text."); 
        $(".container").append(correct,incorrect);
    }
});
